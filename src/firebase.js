import React from "react";
import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCdSTRXN3mdA_s_btI9Z-dt1aJdhJM6nhM",
  authDomain: "challenge-6e879.firebaseapp.com",
  databaseURL: "https://challenge-4b2b2.firebaseio.com",
  projectId: "challenge-6e879",
  storageBucket: "challenge-6e879.appspot.com",
  messagingSenderId: "160307461425",
  appId: "1:160307461425:web:24011246a104923e894410",
  measurementId: "G-4DT1QHD9MW",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
