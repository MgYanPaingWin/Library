import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB2yLV735NNIc_xFEnGoFXjngsoWXCP9d8",
  authDomain: "library-app-627a3.firebaseapp.com",
  projectId: "library-app-627a3",
  storageBucket: "library-app-627a3.firebasestorage.app",
  messagingSenderId: "645169766964",
  appId: "1:645169766964:web:c3e12d5b4a1bff167ca061",
  measurementId: "G-EFBY730R8Z"
};

const app = initializeApp(firebaseConfig);

let db=getFirestore(app);
let auth=getAuth(app);
let storage= getStorage(app);

export {db,auth,storage};