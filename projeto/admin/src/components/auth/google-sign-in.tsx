import React from 'react'
import firebaseAuthProvider from '../../utils/firebase-auth-provider';

function GoogleSignIn() {
    return (
        <button onClick={firebaseAuthProvider.login}>
            Sign in with google
        </button>
    )
}


export default GoogleSignIn;