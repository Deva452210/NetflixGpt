// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD8K14LptWI0TGkvc6xsJ1o-JURYnOu2wc",
  authDomain: "netflixgpt-61bca.firebaseapp.com",
  projectId: "netflixgpt-61bca",
  storageBucket: "netflixgpt-61bca.firebasestorage.app",
  messagingSenderId: "152353928035",
  appId: "1:152353928035:web:9640d25c61929a68891956",
  measurementId: "G-SY0F6CTEFD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
