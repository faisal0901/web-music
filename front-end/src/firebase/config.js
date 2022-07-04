// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDp1wFfhdHvrvJEal49OToaQ2Y9we60DUk",
  authDomain: "firebas-9419a.firebaseapp.com",
  databaseURL: "https://firebas-9419a-default-rtdb.firebaseio.com",
  projectId: "firebas-9419a",
  storageBucket: "firebas-9419a.appspot.com",
  messagingSenderId: "544944090373",
  appId: "1:544944090373:web:eafe4c1efbe3c7996c9b6c",
  measurementId: "G-KF9R2937BK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;
