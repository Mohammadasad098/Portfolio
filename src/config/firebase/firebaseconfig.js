import { initializeApp } from "firebase/app";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyB3AJTxhhWEkJBkefywHu9VGo8m0IS7MbA",
    authDomain: "portfolio-61eff.firebaseapp.com",
    projectId: "portfolio-61eff",
    storageBucket: "portfolio-61eff.appspot.com",
    messagingSenderId: "492337484499",
    appId: "1:492337484499:web:324e07468b43f196b83a26",
    measurementId: "G-3P9G22FPSL"
  };

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);


export default app