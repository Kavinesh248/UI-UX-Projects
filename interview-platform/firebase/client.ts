import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBpAsjD8reFccvZV98nMLm0o-iCdYWy5Ik",
  authDomain: "prepwise-e6f96.firebaseapp.com",
  projectId: "prepwise-e6f96",
  storageBucket: "prepwise-e6f96.firebasestorage.app",
  messagingSenderId: "1007488805222",
  appId: "1:1007488805222:web:d00586b6acf65aeaa240a7",
  measurementId: "G-2W3N8YR51J",
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
