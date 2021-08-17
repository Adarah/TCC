import { Request, Response } from "express";
import admin from 'firebase-admin';
import HttpForbidden from "../../exceptions/http-forbidden";
import { UpsertFirebaseUserMutation, UpsertFirebaseUserMutationVariables } from "../../generated/graphql";
import UPSERT_USER_MUTATION from "../../queries/upsert-user";
import hasuraClient from "../../utils/hasuraClient";

async function createFirebaseUser(req: Request, res: Response): Promise<void> {
    // User must use an email from @usp.br domain
    const user = req.body as admin.auth.UserRecord;
    if (!user.email?.endsWith("@usp.br")) {
        console.info(`User with non-usp email tried to sign-up: ${user.email}`);
        res.sendStatus(200);
        return;
    }

    // Save user into the hasura database
    const { errors } = await hasuraClient.mutate<UpsertFirebaseUserMutation, UpsertFirebaseUserMutationVariables>({
        mutation: UPSERT_USER_MUTATION,
        variables: { id: user.uid, name: user.displayName, email: user.email },
    });
    if (errors) {
        // Even if the operation fails, we want to return 200 to the firebase
        // hook so that it stops retrying
        console.error(`New Firebase User insertion failed: ${JSON.stringify(errors)}`);
        res.sendStatus(200);
        return;
    }

    const customClaims = {
        "https://hasura.io/jwt/claims": {
            "x-hasura-default-role": "user",
            "x-hasura-allowed-roles": ["user"],
            "x-hasura-user-id": user.uid,
        },
    };

    await admin
        .auth()
        .setCustomUserClaims(user.uid, customClaims);

    res.sendStatus(200);
}

export default createFirebaseUser;