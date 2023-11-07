// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDBgeyS8QEARYQP0aOoQcsQ_kNlKmW7e04",
  authDomain: "moengage-58761.firebaseapp.com",
  projectId: "moengage-58761",
  storageBucket: "moengage-58761.appspot.com",
  messagingSenderId: "144211450234",
  appId: "1:144211450234:web:678067e39b52c3dec09ec3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db=getFirestore(app)
const auth = getAuth(app);
export {db,auth}