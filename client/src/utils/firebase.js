
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "interviewiq-ai-84b46.firebaseapp.com",
  projectId: "interviewiq-ai-84b46",
  storageBucket: "interviewiq-ai-84b46.firebasestorage.app",
  messagingSenderId: "755524020943",
  appId: "1:755524020943:web:29d0507e917f79dbf565ba"

};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}
