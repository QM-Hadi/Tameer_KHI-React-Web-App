import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database"; // Import Realtime Database
import { getAuth } from "firebase/auth"; // Optional if using Firebase Authentication

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9KdS0Wca5XhJtqGa1Bncxp2LIIMxXFdY",
  authDomain: "practice-db-de317.firebaseapp.com",
  databaseURL: "https://practice-db-de317-default-rtdb.firebaseio.com",
  projectId: "practice-db-de317",
  storageBucket: "practice-db-de317.firebasestorage.app",
  messagingSenderId: "792766249164",
  appId: "1:792766249164:web:887d640dbbab908c9eaa69",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database
const db = getDatabase(app); 

export { db };
