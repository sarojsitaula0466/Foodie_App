import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDHo8ijnM1MFZRQABoYkwrApBMRQ7wT0bw",
  authDomain: "fir-auth-ffe1d.firebaseapp.com",
  projectId: "fir-auth-ffe1d",
  storageBucket: "fir-auth-ffe1d.appspot.com",
  messagingSenderId: "951812682947",
  appId: "1:951812682947:web:ecbfab7e7f0066ebb85e76",
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}
const auth = firebase.auth();
export { auth };

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
