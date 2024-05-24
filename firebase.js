// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, enablePersistence } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjV37v93Xb2NuI5lsIMvanopWy9dbiaIA",
  authDomain: "clientmanager-c3d81.firebaseapp.com",
  projectId: "clientmanager-c3d81",
  storageBucket: "clientmanager-c3d81.appspot.com",
  messagingSenderId: "915544916052",
  appId: "1:915544916052:web:ff9f5c2adba008167c6dc1",
  measurementId: "G-GRQWMP5TPQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Enable Firestore persistence
const enableFirestorePersistence = async () => {
  try {
    await enablePersistence(db);
    console.log('Firestore persistence enabled!');
  } catch (error) {
    console.log('Error enabling Firestore persistence:', error);
  }
};

// Call the enableFirestorePersistence function
enableFirestorePersistence();

export { db };