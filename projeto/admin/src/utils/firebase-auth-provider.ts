import { FirebaseAuthProvider } from "react-admin-firebase";
import firebaseConfig from "../config/firebase.json";
import { AuthProvider } from "react-admin";
import app from './firebase-init';

const baseAuthProvider = FirebaseAuthProvider(firebaseConfig, {
    watch: [],
    app
});

const firebaseAuthProvider: AuthProvider = {
    ...baseAuthProvider,
    login: async (params: any) => {
        const user = await baseAuthProvider.login(params);
        const claims = await baseAuthProvider.getPermissions(params);
        const hasuraClaims = claims?.['https://hasura.io/jwt/claims'];
        const allowedRoles: string[] = hasuraClaims?.['x-hasura-allowed-roles'];
        // TODO: Verify if user is at least lab editor
        if (allowedRoles?.includes('user')) {
            return user;
        }
        await baseAuthProvider.logout(params);
        throw new Error('Login error: You must be a lab operator or admin to access this admin panel.');
    }
};

export default firebaseAuthProvider;