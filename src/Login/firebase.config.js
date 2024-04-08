// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1wi43sGTldXvQohu1k1ourylAMHu8Tm8",
  authDomain: "agro-firm-3ca2b.firebaseapp.com",
  projectId: "agro-firm-3ca2b",
  storageBucket: "agro-firm-3ca2b.appspot.com",
  messagingSenderId: "115609634540",
  appId: "1:115609634540:web:41ad52e347fef96efd07c9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
export default auth;
