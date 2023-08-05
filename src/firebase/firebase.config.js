// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjjd0PPKA7ZtPzBfNjeXInQdz8vNh1uwA",
  authDomain: "mindbridge-consultancy.firebaseapp.com",
  projectId: "mindbridge-consultancy",
  storageBucket: "mindbridge-consultancy.appspot.com",
  messagingSenderId: "879218523152",
  appId: "1:879218523152:web:1c200cf236190925075e95"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;