import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import fetch from "node-fetch";

admin.initializeApp(functions.config().firebase);

const hasuraBackendUrl = functions.config().hasura.backend_url;
const sharedSecret = functions.config().hasura.shared_secret;

const ONE_HOUR_IN_MILLISECONDS = 1000 * 3600;


// On sign up.
exports.processSignUp =
  functions
    .runWith({ failurePolicy: true })
    .auth.user()
    .onCreate(async (user, context) => {
      const eventAge = Date.now() - Date.parse(context.timestamp);
      if (eventAge > ONE_HOUR_IN_MILLISECONDS) {
        functions.logger.error(`User insertion event expired: ${JSON.stringify(user, null, 2)}`);
        return;
      }

      if (!user.email?.endsWith("@usp.br")) {
        console.info(`User with non-usp email tried to sign-up: ${user.email}`);
        return;
      }

      // If this fails, then an exception will be raised and the cloud function will be retried.
      await fetch(`${hasuraBackendUrl}/CreateFirebaseUser`, {
        method: 'POST',
        body: JSON.stringify(user),
        headers: { 'Content-Type': 'application/json', 'x-firebase-secret': sharedSecret }
      });
    });
