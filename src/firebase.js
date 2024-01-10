// import firebase from "firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA2Q76dGfKvXJMKUw34snMAqYhChsGUtiA",
  authDomain: "priya-amzon.firebaseapp.com",
  projectId: "priya-amzon",
  storageBucket: "priya-amzon.appspot.com",
  messagingSenderId: "27120275796",
  appId: "1:27120275796:web:bc2272586b1feecefa78c1",
  measurementId: "G-V4WKPSCQ7L",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
