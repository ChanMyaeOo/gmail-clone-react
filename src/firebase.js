import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDVQgMRY0kWh3kPGD-6JAVSD6Rb63t9ACY",
    authDomain: "clone-ec1b0.firebaseapp.com",
    projectId: "clone-ec1b0",
    storageBucket: "clone-ec1b0.appspot.com",
    messagingSenderId: "485052131523",
    appId: "1:485052131523:web:35853e919dae8c5906da76",
};
// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, db, provider };
