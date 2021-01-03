import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBS_Dcho_2HTEWeAGheEzmtolgaHPjThzY",
  authDomain: "build-instagram-clone.firebaseapp.com",
  projectId: "build-instagram-clone",
  storageBucket: "build-instagram-clone.appspot.com",
  messagingSenderId: "655061964857",
  appId: "1:655061964857:web:1ac61128420c983809d5e8",
  measurementId: "G-N19177SBNC"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
