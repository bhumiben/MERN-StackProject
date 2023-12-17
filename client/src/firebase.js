// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "finalproject-53acc.firebaseapp.com",
  projectId: "finalproject-53acc",
  storageBucket: "finalproject-53acc.appspot.com",
  messagingSenderId: "814720244611",
  appId: "1:814720244611:web:909a2699ba6000c86774b6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);