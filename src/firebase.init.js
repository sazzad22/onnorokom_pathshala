// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHDVMP7O4rSDjQDpqMn6PBwzvRGJWfqHY",
  authDomain: "education-online-3aa79.firebaseapp.com",
  projectId: "education-online-3aa79",
  storageBucket: "education-online-3aa79.appspot.com",
  messagingSenderId: "137792940870",
  appId: "1:137792940870:web:2ddc81f9dae9613b745347",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// getAuth returns the Auth instance associated with the provided @firebase/app#FirebaseApp. If no instance exists, initializes an Auth instance with platform-specific default dependencies.
const auth = getAuth(app);
export default auth;
