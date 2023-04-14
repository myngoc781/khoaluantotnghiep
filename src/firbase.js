
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "tutorial-ac26c.firebaseapp.com",
  projectId: "tutorial-ac26c",
  storageBucket: "tutorial-ac26c.appspot.com",
  messagingSenderId: "94313690600",
  appId: "1:94313690600:web:14d253a6d0da83fc98e05d",
  measurementId: "G-RR0P0FD4GM"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const database = getDatabase(app);