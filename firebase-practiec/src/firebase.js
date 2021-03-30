import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAhSKk_rf4mJOBlYmnHT64vZ-kQMO3Cr8M",
  authDomain: "test-firebase-c7fc1.firebaseapp.com",
  projectId: "test-firebase-c7fc1",
  storageBucket: "test-firebase-c7fc1.appspot.com",
  messagingSenderId: "243355064068",
  appId: "1:243355064068:web:18ed327f9a444adc13e251",
};

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
