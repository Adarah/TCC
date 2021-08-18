import express from "express";
import admin from "firebase-admin";
import jwt from 'express-jwt';
import jwksRsa from 'jwks-rsa';

import errorHandler from "./utils/error-handler";
import deleteUser from "./endpoints/users/delete-user";
import authWebhookHandler from "./endpoints/auth/auth-webhook-handler";
import createFirebaseUser from "./endpoints/users/create-firebase-user";
import env from "./config";
import createCommand from "./endpoints/commands/create-command";
import executeCommand from "./endpoints/commands/execute-command";

admin.initializeApp({
    credential: admin.credential.applicationDefault(),
    databaseURL: "https://poli-lab0-default-rtdb.firebaseio.com",
});

const app = express();

app.get('/authWebhookHandler', jwt({
    secret: jwksRsa.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: 'https://www.googleapis.com/service_accounts/v1/jwk/securetoken@system.gserviceaccount.com',
    }),
    audience: 'poli-lab0',
    issuer: 'https://securetoken.google.com/poli-lab0',
    algorithms: ['RS256']
}), authWebhookHandler);

app.use(express.json());

// These are all post request because Hasura only sends POSTs
app.post('/CreateFirebaseUser', createFirebaseUser);
app.post('/DeleteUser', deleteUser);
app.post('/CreateCommand', createCommand);
app.post('/ExecuteCommand', executeCommand);


app.use(errorHandler);
app.listen(env.SELF_PORT, () => {
    // eslint-disable-next-line no-console
    console.info(`Listening on ${env.SELF_URL}`);
});
