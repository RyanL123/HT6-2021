import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDeiL1T0jGV_wD7eGHckry3DCPcVsKfJzI",
    authDomain: "ht6-2021.firebaseapp.com",
    projectId: "ht6-2021",
    storageBucket: "ht6-2021.appspot.com",
    messagingSenderId: "406993166422",
    appId: "1:406993166422:web:4122ccc155e9a1e5d51bf7",
};
firebase.initializeApp(firebaseConfig);

firebase
    .auth()
    .setPersistence(firebase.auth.Auth.Persistence.LOCAL)
    .then(() => {})
    .catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
    });

export default firebase;
