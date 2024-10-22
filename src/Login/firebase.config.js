// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8_tqRAVYxiGrEemCpxvEaKmrWpJ0asWw",
  authDomain: "cloth-abb05.firebaseapp.com",
  projectId: "cloth-abb05",
  storageBucket: "cloth-abb05.appspot.com",
  messagingSenderId: "894491910169",
  appId: "1:894491910169:web:f15824d95e450aca5eca88"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
export default auth;
