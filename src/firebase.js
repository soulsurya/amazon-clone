import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyBjpYz5L2DYh1vYmNNDoypg0zINlx9tHRY",
  authDomain: "clone-8c822.firebaseapp.com",
  projectId: "clone-8c822",
  storageBucket: "clone-8c822.appspot.com",
  messagingSenderId: "956983631628",
  appId: "1:956983631628:web:504ddee3312a2f70873329",
  measurementId: "G-XQD35PCVEJ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
