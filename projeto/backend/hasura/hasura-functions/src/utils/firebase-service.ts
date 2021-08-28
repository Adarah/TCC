import admin from "firebase-admin";

type UpdateClaimCallback = (claims: Readonly<Record<string, any>>) => Record<string, any>;

type HasuraCustomClaims = {
  "x-hasura-used-id": string;
  "x-hasura-default-role": string;
  "x-hasura-allowed-roles": string[];
  "x-hasura-lab-ids"?: number[];
};

class FirebaseService {
  private static async getCustomClaims(
    uid: string
  ): Promise<Record<string, any> | undefined> {
    const user = await admin.auth().getUser(uid);
    return user.customClaims;
  }

  static async getHasuraCustomClaims(uid: string): Promise<HasuraCustomClaims | undefined> {
    const user = await admin.auth().getUser(uid);
    return user.customClaims?.["https://hasura.io/jwt/claims"];
  }

  static async updateHasuraCustomClaims(
    uid: string,
    updateClaim: UpdateClaimCallback
  ): Promise<void> {
    const customClaims = await FirebaseService.getCustomClaims(uid);
    const hasuraClaims = customClaims?.["https://hasura.io/jwt/claims"];
    const updatedHasuraClaims = updateClaim(hasuraClaims);
    const newCustomClaims = {
      ...customClaims,
      "https://hasura.io/jwt/claims": { ...hasuraClaims, ...updatedHasuraClaims },
    };
    await admin.auth().setCustomUserClaims(uid, newCustomClaims);
  }

  static refreshToken(uid: string): Promise<void> {
    // Update real-time database to notify client to force refresh.
    const metadataRef = admin.database().ref(`metadata/${uid}`);
    // Set the refresh time to the current UTC timestamp.
    // This will be captured on the client to force a token refresh.
    return metadataRef.set({ refreshTime: new Date().getTime() });
  }

  static async deleteUser(uid: string): Promise<void> {
    await admin.auth().deleteUser(uid);
    return FirebaseService.refreshToken(uid);
  }
}

export default FirebaseService;
