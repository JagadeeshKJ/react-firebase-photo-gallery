import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'; 
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  //link react app to firebase 
  //you can get your config data after creating a webapp in firebase
  //just paste it here
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
