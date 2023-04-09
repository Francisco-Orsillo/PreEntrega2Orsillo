import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA_y1DXwW6qcBOEjW5vOq2QiJbWwFYceLw",
  authDomain: "react-orsi.firebaseapp.com",
  projectId: "react-orsi",
  storageBucket: "react-orsi.appspot.com",
  messagingSenderId: "886261379380",
  appId: "1:886261379380:web:fadbeefe3b8ecbbb213561",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
