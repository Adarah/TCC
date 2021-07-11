import admin from "firebase-admin";

type UpdateClaimCallback = (claims: Record<string, any>) => void;

type HasuraCustomClaims = {
  "x-hasura-used-id": string;
  "x-hasura-default-role": string;
  "x-hasura-allowed-roles": string[];
  "x-hasura-lab-ids"?: number[];
};

class FirebaseService {
  private static async getCustomClaims(
    uid: string
  ): Promise<Record<string, any>> {
    const user = await admin.auth().getUser(uid);
    return user.customClaims!;
  }

  static async getHasuraCustomClaims(uid: string): Promise<HasuraCustomClaims> {
    const user = await admin.auth().getUser(uid);
    return user.customClaims!["https://hasura.io/jwt/claims"];
  }

  static async updateHasuraCustomClaims(
    uid: string,
    updateClaim: UpdateClaimCallback
  ): Promise<void> {
    const customClaims = await FirebaseService.getCustomClaims(uid);
    const hasuraClaims = customClaims["https://hasura.io/jwt/claims"];
    updateClaim(hasuraClaims);
    await admin.auth().setCustomUserClaims(uid, {
      ...customClaims,
      "https://hasura.io/jwt/claims": hasuraClaims,
    });
    await FirebaseService.refreshToken(uid);
  }

  static refreshToken(uid: string): Promise<void> {
    // Update real-time database to notify client to force refresh.
    const metadataRef = admin.database().ref(`metadata/${uid}`);
    // Set the refresh time to the current UTC timestamp.
    // This will be captured on the client to force a token refresh.
    return metadataRef.set({ refreshTime: new Date().getTime() });
  }
}

export default FirebaseService;
