import {NextFunction, Request, Response} from "express";
import FirebaseService from "./utils/firebaseService";
import hasuraClient from "./utils/hasuraClient";
import {
  AddOperatorToLabMutation,
  AddOperatorToLabMutationVariables,
  GetUserRoleQuery,
  GetUserRoleQueryVariables,
} from "./generated/graphql";
import GET_USER_ROLE from "./queries/get-user-role";
import ADD_OPERATOR_TO_LAB from "./queries/add-operator-to-lab";
import HttpForbidden from "./exceptions/http-forbidden";

async function hasPermissionToAddNewOperatorToLab(
  requesterHasuraRole: string,
  requesterId: string,
  potentialNewOperatorId: string,
  labId: number
): Promise<[boolean, string | undefined]> {
  if (requesterHasuraRole === "admin") return [true, undefined];

  const { data, errors } = await hasuraClient.query<
    GetUserRoleQuery,
    GetUserRoleQueryVariables
  >({
    query: GET_USER_ROLE,
    variables: { userId: potentialNewOperatorId },
  });
  if (errors) {
    return [false, errors[0].message];
  }

  if (data.user_by_pk?.role_title !== "lab_operator") return [false, `Target uid ${potentialNewOperatorId} does not have the "lab_operator" role.`];

  const hasuraCustomClaims = await FirebaseService.getHasuraCustomClaims(
    requesterId
  );
  return [!!hasuraCustomClaims["x-hasura-lab-ids"]?.includes(labId), `Operator ${requesterId} does not have permission to add new operators to lab ${labId}.`];
}

async function addOperatorToLab(req: Request, res: Response, next: NextFunction): Promise<void> {
  // get request input
  const { operatorId, labId } = req.body.input;

  const {
    "x-hasura-role": requesterHasuraRole,
    "x-hasura-user-id": requesterId,
  } = req.body.session_variables;

  // verify if operator can add new operators to this lab
  const [hasPermission, errorMessage] = await hasPermissionToAddNewOperatorToLab(
    requesterHasuraRole,
    requesterId,
    operatorId,
    labId
  );
  if (!hasPermission) {
    next(new HttpForbidden(errorMessage));
    return;
  }

  // execute the Hasura operation

  try {
    const { data, errors } = await hasuraClient.mutate<
      AddOperatorToLabMutation,
      AddOperatorToLabMutationVariables
    >({
      mutation: ADD_OPERATOR_TO_LAB,
      variables: { operatorId, labId },
    });

    // if Hasura operation errors, then throw error
    if (errors) {
      console.error(errors[0]);
      res.status(400).json(errors[0]);
      return;
    }

    // update firebase custom claims
    await FirebaseService.updateHasuraCustomClaims(operatorId, (claims) => {
      const labIds: number[] = claims["x-hasura-lab-ids"] ?? [];
      if (!labIds.includes(labId)) {
        labIds.push(labId);
      }
      // We do want the side effects of mutating in place.
      claims["x-hasura-lab-ids"] = labIds;
      claims["x-hasura-default-role"] = "lab_operator";
      claims["x-hasura-allowed-roles"] = ["lab_operator"];
    });

    // success
    res.json({
      ...data!.insert_lab_operator_one,
    });
  } catch (error) {
    next(error);
    // res.status(400).json(error);
  }
}

export default addOperatorToLab;
