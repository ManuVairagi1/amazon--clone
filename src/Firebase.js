import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBD7uRlSZ_M_bH31JDb1Ierj0Ec5mUX2Jw",
  authDomain: "clone-3d056.firebaseapp.com",
  projectId: "clone-3d056",
  storageBucket: "clone-3d056.appspot.com",
  messagingSenderId: "982004838969",
  appId: "1:982004838969:web:aa7348a604d04268b953e8",
  measurementId: "G-15WWEDHE5B",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
