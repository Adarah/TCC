import firebaseConfig from "../config/firebase.json";
import firebase from 'firebase';
import currentUser from "../globals/current-user";

const app = firebase.initializeApp(firebaseConfig);

firebase.auth().useEmulator('http://localhost:9099');

app.auth().onAuthStateChanged((user) => {
    currentUser.id = user?.uid;
});

export default app;