// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCXe9PxM2rh4H1p3F8R3ev8jrbX9zjL1CU",
  authDomain: "interiolive-ac021.firebaseapp.com",
  projectId: "interiolive-ac021",
  storageBucket: "interiolive-ac021.appspot.com",
  messagingSenderId: "17383490693",
  appId: "1:17383490693:web:077ef081f6db2d9a1395ec",
  measurementId: "G-601Y8KDMNK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { firestore, storage };

