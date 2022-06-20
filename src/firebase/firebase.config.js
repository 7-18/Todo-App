import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCGLMjk6128VDJZYTY8aYqJwiLH93nRWq8",
  authDomain: "frontend-11-370e6.firebaseapp.com",
  projectId: "frontend-11-370e6",
  storageBucket: "frontend-11-370e6.appspot.com",
  messagingSenderId: "640478787179",
  appId: "1:640478787179:web:ae693979fb33f65f60632e",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export default app;
