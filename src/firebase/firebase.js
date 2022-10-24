// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjTAQdPVCDCfrM93EZdjy6o5HXmRJibik",
  authDomain: "ecommerce-daniontivero.firebaseapp.com",
  projectId: "ecommerce-daniontivero",
  storageBucket: "ecommerce-daniontivero.appspot.com",
  messagingSenderId: "636645902447",
  appId: "1:636645902447:web:ff043cef837c570cf5259a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
