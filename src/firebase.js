// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyChSIwXbGUONfSZx2RmUxsMI74oO4ShMGI",
  authDomain: "globefi-exchange.firebaseapp.com",
  projectId: "globefi-exchange",
  storageBucket: "globefi-exchange.firebasestorage.app",
  messagingSenderId: "172380633361",
  appId: "1:172380633361:web:7a537be22766ca7181f4b0",
  measurementId: "G-T79RRPKEMQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
