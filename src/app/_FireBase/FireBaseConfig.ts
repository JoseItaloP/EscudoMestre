// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCh90SYhkbmRZRFNRFkbPnTKjwi3HXpPZw",
  authDomain: "escudomestre-2808.firebaseapp.com",
  projectId: "escudomestre-2808",
  storageBucket: "escudomestre-2808.appspot.com",
  messagingSenderId: "111859713927",
  appId: "1:111859713927:web:56f41a8acb19a7c4fe7522",
  measurementId: "G-T4MYKXFGK5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
