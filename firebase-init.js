import { initializeApp } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-app.js";
import { 
  getAuth, 
  RecaptchaVerifier, 
  signInWithPhoneNumber 
} from "https://www.gstatic.com/firebasejs/12.9.0/firebase-auth.js";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  serverTimestamp,
  GeoPoint,
  collection,
  addDoc,
  query,
  where,
  orderBy,
  limit,
  getDocs
} from "https://www.gstatic.com/firebasejs/12.9.0/firebase-firestore.js";
import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL
} from "https://www.gstatic.com/firebasejs/12.9.0/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyBnYrIk289re79mTZbZMp-U_-AAVsuoOD8",
  authDomain: "flair-webapp.firebaseapp.com",
  projectId: "flair-webapp",
  storageBucket: "flair-webapp.firebasestorage.app",
  messagingSenderId: "542875968797",
  appId: "1:542875968797:web:fdea947b757444ba1c6df4",
  measurementId: "G-RC9XEF2PM3"
};

const app  = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db   = getFirestore(app);
const storage = getStorage(app);

window.flairFirebase = { 
  app, 
  auth, 
  RecaptchaVerifier, 
  signInWithPhoneNumber,
  db,
  storage,
  firestoreFns: { 
    doc, 
    getDoc, 
    setDoc, 
    serverTimestamp,
    GeoPoint,
    collection,
    addDoc,
    query,
    where,
    orderBy,
    limit,
    getDocs
  },
  storageFns: {
    ref,
    uploadBytes,
    getDownloadURL
  }
};


