import React from "react";
import {Login, LoginForm} from "react-admin";
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';
import ForgotPasswordButton from '../components/forgot-password';

// Configure FirebaseUI.
const uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: 'popup',
    signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
        signInSuccessWithAuthResult: (authResult: any, redirectUrl?: string): boolean => {
            authResult.user.getIdTokenResult().then((tokenResult: any) => {
                const claims = tokenResult.claims;
                const hasuraClaims = claims?.['https://hasura.io/jwt/claims'];
                const allowedRoles: string[] = hasuraClaims?.['x-hasura-allowed-roles'];
                // TODO: Replace user role by admin/student later
                if (allowedRoles?.includes('lab_operator') || allowedRoles?.includes('student')) {
                    return window.location.assign('/');
                }
                firebase.auth().signOut();
            });
            return false;
        }
    }
};

const FirebaseUi = () => <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()}/>;

const CustomLoginForm = (props: any) => (
    <div>
        <LoginForm {...props} />
        <ForgotPasswordButton/>
        <FirebaseUi/>
    </div>
);

const CustomLoginPage = (props: any) => (
    <Login {...props}>
        <CustomLoginForm {...props}/>
    </Login>
);

export default CustomLoginPage;
