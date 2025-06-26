import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyChSIwXbGUONfSZx2RmUxsMI74oO4ShMGI",
  authDomain: "globefi-exchange.firebaseapp.com",
  projectId: "globefi-exchange",
  storageBucket: "globefi-exchange.firebasestorage.app",
  messagingSenderId: "172380633361",
  appId: "1:172380633361:web:7a537be22766ca7181f4b0",
  measurementId: "G-T79RRPKEMQ",
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const provider = new GoogleAuthProvider();
