// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics"; // Optional: Use only if you want to enable Google Analytics
import { getAuth } from "firebase/auth"; // Import Firebase Authentication

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBgq-ApIXxlQfv7HcCarBieoXpfqsWi8v8",
  authDomain: "offthepath-webapp.firebaseapp.com",
  databaseURL: "https://offthepath-webapp-default-rtdb.firebaseio.com",
  projectId: "offthepath-webapp",
  storageBucket: "offthepath-webapp.appspot.com",
  messagingSenderId: "809294992298",
  appId: "1:809294992298:web:7111cefe4d3477648dd1d3",
  measurementId: "G-1301NZ0T13", // Optional, used for analytics
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Optional: Initialize Google Analytics
// const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
