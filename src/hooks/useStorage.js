import { useEffect, useState } from 'react';
import { storage, db } from '../firebase/config';
import { 
    ref, 
    uploadBytesResumable, 
    getDownloadURL 
} from "firebase/storage";
import { 
    collection, 
    addDoc, 
    getDocs,
    doc,
    updateDoc,
    deleteDoc,
    onSnapshot,
    serverTimestamp
  } from 'firebase/firestore';

const useStorage = (file) => {
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);

  const collectionRef = collection(db, "images");

    useEffect(() => {
        const storageRef = ref(storage, file.name);
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on('state_changed', (snapshot) => {
            let percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            setProgress(percentage);
        }, (err) => {
            setError(err);
        }, async () => {
            const url = await getDownloadURL(uploadTask.snapshot.ref);
            setUrl(url);
            addDoc(collectionRef, { url, createdAt: serverTimestamp() });
        })

    }, [file]);

  return { progress, url, error }
}

export default useStorage;