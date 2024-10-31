// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZHl9xKZO1S3xXUdl1HrJHiVGtm0fgLQo",
  authDomain: "miprimerproyecto-40173.firebaseapp.com",
  projectId: "miprimerproyecto-40173",
  storageBucket: "miprimerproyecto-40173.appspot.com",
  messagingSenderId: "1027324970567",
  appId: "1:1027324970567:web:e7d1913708bbcade6d5362"
};




// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Inicialice Cloud Firestore y obtenga una referencia al servicio
export const db = getFirestore(app);