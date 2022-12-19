// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAIWEmrLrPTLRDUQDrpeyg_qDW5MUf5XT0",
  authDomain: "nextjs-wbs.firebaseapp.com",
  projectId: "nextjs-wbs",
  storageBucket: "nextjs-wbs.appspot.com",
  messagingSenderId: "301016744161",
  appId: "1:301016744161:web:771c0a6153e1d36b7737a0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;