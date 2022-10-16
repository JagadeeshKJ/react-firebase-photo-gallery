import { db } from "../firebase/config";
import { useEffect, useState } from 'react';
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";

const useFirestore = (col) => {
  const [docs, setDocs] = useState([]);
  const collectionRef = collection(db, col);
  const q = query(collectionRef, orderBy("createdAt", "desc"));


    useEffect(() => {
        const unsub = onSnapshot(q, (snap) => {
            let documents = [];
            snap.forEach(doc => {
                documents.push({...doc.data(), id: doc.id})
            });
            setDocs(documents);
        })

        return () => unsub(); 

    }, [collection])

  return { docs };
}

export default useFirestore