import {FirebaseAuthProvider} from "react-admin-firebase";
import firebaseConfig from "../config/firebase.json";
import {AuthProvider} from "react-admin";
import firebase from 'firebase';

const app = firebase.initializeApp(firebaseConfig);
// Uncomment this to use the auth emulator
// firebase.auth().useEmulator('http://localhost:9099');

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
        // TODO: Replace user role by admin later
        if (allowedRoles?.includes('lab_operator') || allowedRoles?.includes('student')) {
            const metadataRef = firebase.database().ref(`metadata/${user.uid}/refreshTime`);
            metadataRef.on('value', async (data) => {
                if (!data.exists) return;
                await user.getIdToken(true);
            });
            return user;
        }
        await baseAuthProvider.logout(params);
        throw new Error('Login error: You must be a lab operator or admin to access this admin panel.');
    }
};

export default firebaseAuthProvider;