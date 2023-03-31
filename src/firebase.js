import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import.meta.env

const firebaseConfig = {
    apiKey: import.meta.env.VITE_REACT_FIRE_KEY,
    authDomain: "dashboard-main-65bca.firebaseapp.com",
    projectId: "dashboard-main-65bca",
    storageBucket: "dashboard-main-65bca.appspot.com",
    messagingSenderId: "548246943843",
    appId: "1:548246943843:web:905e65c0343c715b7ca056"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
