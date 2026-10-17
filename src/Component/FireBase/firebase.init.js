// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCj8QQybGg0vKjnEj0-97MNh6TEL9PJtTw",
  authDomain: "d-model-hub-97595.firebaseapp.com",
  projectId: "d-model-hub-97595",
  storageBucket: "d-model-hub-97595.firebasestorage.app",
  messagingSenderId: "941596255242",
  appId: "1:941596255242:web:1e732ee59e4a48ff852bf3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth=getAuth(app);

export default auth;