import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'; 
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDDdZ_P73aXPAPqi4cLHgGizPiSRJLbUaQ",
  authDomain: "firegram-8cab6.firebaseapp.com",
  projectId: "firegram-8cab6",
  storageBucket: "firegram-8cab6.appspot.com",
  messagingSenderId: "996912954557",
  appId: "1:996912954557:web:4aca17597fd2bacec7cbd4"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);