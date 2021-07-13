import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import fetch from "node-fetch";

admin.initializeApp(functions.config().firebase);

const hasuraAdminSecret = functions.config().hasura.admin_secret;
const hasuraUrl = functions.config().hasura.url;

const INSERT_USER_MUTATION = `
mutation InsertFirebaseUser($id: String!, $name: String, $email: String!, $usp_id: String) {
  insert_user_one(object: {id: $id, name: $name, email: $email, usp_id: $usp_id, role_title: student}) {
    id
  }
}
`;

// On sign up.
exports.processSignUp = functions.auth.user().onCreate(async (user) => {
  // User must use an email from @usp.br domain
  if (!user.email?.endsWith("@usp.br")) {
    console.log(`User with non-usp email tried to sign-up: ${user.email}`);
    return;
  }
  const customClaims = {
    "https://hasura.io/jwt/claims": {
      "x-hasura-default-role": "student",
      "x-hasura-allowed-roles": ["student"],
      "x-hasura-user-id": user.uid,
    },
  };

  try {
    await admin
        .auth()
        .setCustomUserClaims(user.uid, customClaims);
    // Update real-time database to notify client to force refresh.
    const metadataRef = admin.database().ref("metadata/" + user.uid);
    // Set the refresh time to the current UTC timestamp.
    // This will be captured on the client to force a token refresh.
    await metadataRef.set({refreshTime: new Date().getTime()});

    // Save user into the hasura database
    await fetch(hasuraUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "x-hasura-admin-secret": hasuraAdminSecret,
      },
      body: JSON.stringify({
        query: INSERT_USER_MUTATION,
        variables: {id: user.uid, name: user.displayName, email: user.email},
      }),
    });
  } catch (e) {
    console.error(e);
  }
});
