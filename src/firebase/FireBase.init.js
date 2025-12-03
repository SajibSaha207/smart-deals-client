// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAYXBv1PO1aw2qbgVlyhyv0xpEyEPT6NC8",
  authDomain: "smartdeals-67869.firebaseapp.com",
  projectId: "smartdeals-67869",
  storageBucket: "smartdeals-67869.firebasestorage.app",
  messagingSenderId: "501600094286",
  appId: "1:501600094286:web:9a7fd199be7e84e15d1b1f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);