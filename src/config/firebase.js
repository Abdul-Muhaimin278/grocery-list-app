import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAx-dSdOS5TkgL7E2b4loeh0zO7UKmHIkc",
  authDomain: "grocery-list-app-3afc2.firebaseapp.com",
  projectId: "grocery-list-app-3afc2",
  storageBucket: "grocery-list-app-3afc2.firebasestorage.app",
  messagingSenderId: "531532148092",
  appId: "1:531532148092:web:ba53163c6595609cd048f9",
  measurementId: "G-3XV1W2JNTZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
