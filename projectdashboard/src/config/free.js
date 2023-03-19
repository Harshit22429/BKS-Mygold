import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getDatabase} from "firebase/database"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAiIO--6UxS7JC9VAe1smUk7Jr841S5mMY",
  authDomain: "harshit-website-66371.firebaseapp.com",
  projectId: "harshit-website-66371",
  storageBucket: "harshit-website-66371.appspot.com",
  messagingSenderId: "550821914583",
  appId: "1:550821914583:web:e89634d040b91f70d88d92",
  measurementId: "G-Y8MXWKTXNE"
};

// Initialize Firebase
const fire = initializeApp(firebaseConfig);
const db= getDatabase(fire)
const auth = getAuth();

export { fire, auth ,db}