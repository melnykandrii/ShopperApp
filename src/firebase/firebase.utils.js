import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCBCRlrSZevCBWgSsX7RfJRf1BeXJ5ybmI",
  authDomain: "shopperapp-af65e.firebaseapp.com",
  projectId: "shopperapp-af65e",
  storageBucket: "shopperapp-af65e.appspot.com",
  messagingSenderId: "1086053725271",
  appId: "1:1086053725271:web:f54217b1a5152951e71f12",
  measurementId: "G-GDL72729D0",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
