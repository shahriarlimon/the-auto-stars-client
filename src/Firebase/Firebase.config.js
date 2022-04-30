// Import the functions you need from the SDKs you need
import { getApp, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBlwQ_xNrfA_ovH2dsX9TjTqDxJrKdlZ-Q",
  authDomain: "the-autostars.firebaseapp.com",
  projectId: "the-autostars",
  storageBucket: "the-autostars.appspot.com",
  messagingSenderId: "153015121082",
  appId: "1:153015121082:web:e69407db1097cc59bffe83"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
