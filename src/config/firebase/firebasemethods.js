  import app from "./firebaseconfig";
  import {
    getFirestore,
    collection,
    addDoc,
  } from "firebase/firestore";
    
  //initialize firestore database
  const db = getFirestore(app);
  




const sendData = (obj, colName) => {
    return new Promise((resolve, reject) => {
      addDoc(collection(db, colName), obj)
        .then((res) => {
          resolve("data send to db successfully");
        })
        .catch((err) => {
          reject(err);
        });
    });
  };