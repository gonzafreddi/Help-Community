// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARMbmkYMEBNo9cz4zyKCCRS85Osm6uGac",
  authDomain: "help-community-37691.firebaseapp.com",
  projectId: "help-community-37691",
  storageBucket: "help-community-37691.appspot.com",
  messagingSenderId: "148062788644",
  appId: "1:148062788644:web:1a61cd10b51acb5d640cb1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);