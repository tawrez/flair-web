// flair. - Firebase Configuration
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js';
import { getFirestore } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js';
import { getAuth } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js';
import { getStorage } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js';

const firebaseConfig = {
  apiKey: "AIzaSyDjn6SJeEiHEHEAyxjYTHcLs3nWzeJDukE",
  authDomain: "salon-sphere-x7c14z.firebaseapp.com",
  projectId: "salon-sphere-x7c14z",
  storageBucket: "salon-sphere-x7c14z.firebasestorage.app",
  messagingSenderId: "539094938958",
  appId: "1:539094938958:web:57aae92048e34840601a1f"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
export default app;
