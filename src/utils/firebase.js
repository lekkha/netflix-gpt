// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDFlkwOi7mker_IN0c7IL2BabPu_QeUNlk",
    authDomain: "netflix-gpt-56371.firebaseapp.com",
    projectId: "netflix-gpt-56371",
    storageBucket: "netflix-gpt-56371.appspot.com",
    messagingSenderId: "992658183670",
    appId: "1:992658183670:web:da5b382db58cc98aa863d7",
    measurementId: "G-PZ0JR9EXES"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);