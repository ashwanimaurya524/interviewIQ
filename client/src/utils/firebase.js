
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "interviewiq-21e63.firebaseapp.com",
  projectId: "interviewiq-21e63",
  storageBucket: "interviewiq-21e63.firebasestorage.app",
  messagingSenderId: "399014197020",
  appId: "1:399014197020:web:cb2652b044fb1d19162cd9"

};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}
