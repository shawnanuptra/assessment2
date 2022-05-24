import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { getFirestore } from "firebase/firestore";

//TODO: make this secret?
const firebaseConfig = {
    apiKey: "AIzaSyAQWXaMq7ex-0AAcAj11PYOsEAfLCS0ffA",
    authDomain: "bridle-path-dmg-reporting.firebaseapp.com",
    projectId: "bridle-path-dmg-reporting",
    storageBucket: "bridle-path-dmg-reporting.appspot.com",
    messagingSenderId: "1083274341528",
    appId: "1:1083274341528:web:efca971c23103602c6b4ed"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

export async function signInWithGoogle(auth, provider) {
    await signInWithPopup(auth, provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;

            console.log(user);
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
        });
}
