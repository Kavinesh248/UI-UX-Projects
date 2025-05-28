// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBpAsjD8reFccvZV98nMLm0o-iCdYWy5Ik",
  authDomain: "prepwise-e6f96.firebaseapp.com",
  projectId: "prepwise-e6f96",
  storageBucket: "prepwise-e6f96.firebasestorage.app",
  messagingSenderId: "1007488805222",
  appId: "1:1007488805222:web:d00586b6acf65aeaa240a7",
  measurementId: "G-2W3N8YR51J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);