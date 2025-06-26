import { auth, db } from "../firebase.js";

import {
  signInWithPopup,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInAnonymously,
  sendPasswordResetEmail,
} from "firebase/auth";
import toast from "react-hot-toast";
import { addDoc, doc, setDoc, getDoc } from "firebase/firestore";

export const signInWithEmail = async (e, email, password) => {
  try {
    e.preventDefault(); // Prevent default form submission behavior
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    console.log("User signed in with email:", user);

    const userDocRef = await getDoc(doc(db, "users", user?.uid));
    console.log("userDocRef", userDocRef.data());
    if (!userDocRef.exists()) {
      console.error("User document does not exist in Firestore:", user.uid);
      return;
    }

    return user;
  } catch (error) {
    console.error("Error signing in with email:", error);

    // Handle specific Firebase error codes
    switch (error.code) {
      case "auth/invalid-credential":
        toast.error("Invalid credentials. Please try again.");
        break;
      case "auth/too-many-requests":
        toast.error("Too many login attempts. Please try again later.");

        break;
      default:
        toast.error("An error occurred while signing in. Please try again.");
    }

    throw error;
  }
};

export const registerWithEmail = async (
  email,
  password,
  promoCode,
  referralCode
) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    console.log("User registered with email:", user);
    const userDocRef = doc(db, "users", user.uid);
    // Generate a 9-digit unique code for the user
    const generateUniqueCode = () => {
      return Math.floor(100000000 + Math.random() * 900000000).toString();
    };
    const chartDocRef = doc(db, "chartEdits", user.uid);
    const uniqueCode = generateUniqueCode();
    await setDoc(userDocRef, {
      uid: user.uid,
      email: user.email,
      ref: referralCode,
      promoCode: promoCode,
      balance: {
        ETHUSDT: {
          currency: "ETHUSDT",
          amount: 0,
        },
        USDT: {
          currency: "USDT",
          amount: 0,
        },
        BNBUSDT: {
          currency: "BNBUSDT",
          amount: 0,
        },
        SOLUSDT: {
          currency: "SOLUSDT",
          amount: 0,
        },
        USDCBNB: {
          currency: "USDCBNB",
          amount: 0,
        },
        XRPUSDT: {
          currency: "XRPUSDT",
          amount: 0,
        },
        DOGEUSDT: {
          currency: "DOGEUSDT",
          amount: 0,
        },
        TONUSDT: {
          currency: "TONUSDT",
          amount: 0,
        },
        TRXUSDT: {
          currency: "TRXUSDT",
          amount: 0,
        },
        ADAUSDT: {
          currency: "ADAUSDT",
          amount: 0,
        },
        AVAXUSDT: {
          currency: "AVAXUSDT",
          amount: 0,
        },
        WBTCUSDT: {
          currency: "WBTCUSDT",
          amount: 0,
        },
        BTCUSDT: {
          currency: "BTCUSDT",
          amount: 0,
        },
      },
      isAdmin: false,
      role: "live",
      status: "unverified",
      uniquenumid: uniqueCode,
      createdAt: new Date().toISOString(), // Store the creation date
    });

    const useSnap1 = await getDoc(userDocRef);

    console.log("userDocRef", useSnap1.data());
    if (!useSnap1.exists()) {
      console.error("User document does not exist in Firestore:", user.uid);
      return;
    }
    const userData = useSnap1.data();

    return user;
  } catch (error) {
    console.error("Error registering with email:", error);
    throw error;
  }
};

export const signOutUser = async () => {
  try {
    await signOut(auth);
    console.log("User signed out successfully");
  } catch (error) {
    console.error("Error signing out:", error);
    throw error;
  }
};

export const resetPassword = async (email) => {
  try {
    const result = await sendPasswordResetEmail(auth, email);

    toast.success("Password reset link has been sent to your email!");
    console.log(email);

    console.log("Password reset email sent:", result);
  } catch (error) {
    toast.error(error);
  }
};
