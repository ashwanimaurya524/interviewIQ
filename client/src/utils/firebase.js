
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "interviewiq-74d56.firebaseapp.com",
  projectId: "interviewiq-74d56",
  storageBucket: "interviewiq-74d56.firebasestorage.app",
  messagingSenderId: "620746495275",
  appId: "1:620746495275:web:4b06ef5dbe3d1b2841e16e"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}