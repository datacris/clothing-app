// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAsve4Hk7i5dU6cBtF50WhW5jdJOUR0K3w",
  authDomain: "datacris-clothing-db.firebaseapp.com",
  projectId: "datacris-clothing-db",
  storageBucket: "datacris-clothing-db.appspot.com",
  messagingSenderId: "729721420477",
  appId: "1:729721420477:web:aa0aa8431286809299d5d4",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account"
});
export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
