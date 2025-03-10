// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCo31xAoE--kUQnNA8ZNQWZMHZ6pqOYB9o",
  authDomain: "volleyball-site-7b01c.firebaseapp.com",
  projectId: "volleyball-site-7b01c",
  storageBucket: "volleyball-site-7b01c.firebasestorage.app",
  messagingSenderId: "340131592827",
  appId: "1:340131592827:web:9c8a3352fe273a4e67c0de",
  measurementId: "G-3R4P4R0PF1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const analytics = getAnalytics(app);