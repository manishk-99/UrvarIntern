import firebase from "firebase";
var firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBoOfbUfd4YT0Mk7Fmqru3RT7Y5oe1GUo4",
  authDomain: "urvarintern.firebaseapp.com",
  projectId: "urvarintern",
  storageBucket: "urvarintern.appspot.com",
  messagingSenderId: "87762831829",
  appId: "1:87762831829:web:5be2b0dd42d0ce480dd55c"
});
var db = firebaseApp.firestore();
export { db };
