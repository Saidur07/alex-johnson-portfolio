// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAYAQ8de5XphIfSaZR6a27dx_2aNIq7t9Y",
  authDomain: "alex-johnson-portfolio.firebaseapp.com",
  projectId: "alex-johnson-portfolio",
  storageBucket: "alex-johnson-portfolio.appspot.com",
  messagingSenderId: "612099163529",
  appId: "1:612099163529:web:7d7945c383d47dd8b84d58",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
