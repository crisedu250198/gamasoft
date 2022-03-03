// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyBJ6BKpgp3GSwDZtOrkPWOhtzYsovG5sio",
  authDomain: "gamasoft-5d549.firebaseapp.com",
  projectId: "gamasoft-5d549",
  storageBucket: "gamasoft-5d549.appspot.com",
  messagingSenderId: "571000997911",
  appId: "1:571000997911:web:a80b0fcac5763c8ad87452"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;