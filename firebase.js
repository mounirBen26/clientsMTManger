// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore, initializeFirestore, persistentLocalCache, memoryLocalCache } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCjV37v93Xb2NuI5lsIMvanopWy9dbiaIA',
  authDomain: 'clientmanager-c3d81.firebaseapp.com',
  projectId: 'clientmanager-c3d81',
  storageBucket: 'clientmanager-c3d81',
  messagingSenderId: '915544916052',
  appId: '1:915544916052:web:ff9f5c2adba008167c6dc1',
  measurementId: 'G-GRQWMP5TPQ'
};

// Initialize Firebase if it hasn't been initialized already
let app;
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApp(); // Use the existing initialized app
}

// Initialize Firestore with persistent cache if possible
let db;
try {
  db = initializeFirestore(app, {
    cache: persistentLocalCache({ tabSynchronization: true })
  });
  console.log('Firestore persistence enabled!');
} catch (error) {
  console.error('Error enabling IndexedDB cache. Falling back to memory cache:', error);
  db = getFirestore(app);
}

export { db };
