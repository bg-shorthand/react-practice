import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDLjAJ3gR2ASWsL4RMa4oaGr2icMXN4sns",
  authDomain: "make-board-practice.firebaseapp.com",
  projectId: "make-board-practice",
  storageBucket: "make-board-practice.appspot.com",
  messagingSenderId: "949013797939",
  appId: "1:949013797939:web:98b0d35d68fd520ea15746",
};

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
