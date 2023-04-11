import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAPmS2dRjK6Qd3T9ZgdM31l0iL2oujpCRo",
  authDomain: "note-demo-7c9c0.firebaseapp.com",
  projectId: "note-demo-7c9c0",
  databaseURL: "https://note-demo-7c9c0-default-rtdb.firebaseio.com",
  storageBucket: "note-demo-7c9c0.appspot.com",
  messagingSenderId: "405754528263",
  appId: "1:405754528263:web:4e27a60fe92de4994c60a2",
};

 const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
 export const db = getDatabase(app);
 

 export default app; 

