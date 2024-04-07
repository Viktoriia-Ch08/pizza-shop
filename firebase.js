import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCOruauj64LnjjC3OV0RCWcZWuCR7dXdmM",
  authDomain: "pizzashop-ad5c2.firebaseapp.com",
  databaseURL:
    "https://pizzashop-ad5c2-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "pizzashop-ad5c2",
  storageBucket: "pizzashop-ad5c2.appspot.com",
  messagingSenderId: "593973408509",
  appId: "1:593973408509:web:69302ffdf6a6be6c120494",
  measurementId: "G-2FLGGVSEYS",
};

const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
export const auth = getAuth(app);
