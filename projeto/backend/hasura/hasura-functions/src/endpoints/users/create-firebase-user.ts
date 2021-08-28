import { Request, Response } from "express";
import { auth } from 'firebase-admin/lib/auth';
import { UpsertFirebaseUserMutation, UpsertFirebaseUserMutationVariables } from "../../generated/graphql";
import UPSERT_USER_MUTATION from "../../queries/upsert-user";
import FirebaseService from "../../utils/firebase-service";
import hasuraClient from "../../utils/hasura-client";

async function createFirebaseUser(req: Request, res: Response): Promise<void> {
    // User must use an email from @usp.br domain
    const user = req.body as auth.UserRecord;
    if (!user.email?.endsWith("@usp.br")) {
        console.info(`User with non-usp email tried to sign-up: ${user.email}`);
        res.sendStatus(200);
        return;
    }

    try {
        // Save user into the hasura database
        await hasuraClient.mutate<UpsertFirebaseUserMutation, UpsertFirebaseUserMutationVariables>({
            mutation: UPSERT_USER_MUTATION,
            variables: { id: user.uid, name: user.displayName, email: user.email },
        });
    } catch (err) {
        // Even if the operation fails, we want to return 200 to the firebase
        // hook so that it stops retrying
        console.error(`New Firebase User insertion failed: ${JSON.stringify(err)}`);
        res.sendStatus(200);
        return;
    }

    const customClaims = {
        "x-hasura-default-role": "user",
        "x-hasura-allowed-roles": ["user"],
        "x-hasura-user-id": user.uid,
    };
    console.log('before');
    await FirebaseService.updateHasuraCustomClaims(user.uid, () => (customClaims));
    console.log('after');

    res.sendStatus(200);
}

export default createFirebaseUser;