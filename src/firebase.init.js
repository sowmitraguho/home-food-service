// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// DANGER: DO NOT PUSH CONFIG TO PUBLIC
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYoCxcn6wnhRLaUy5dWkFXGexeKDdgnHs",
  authDomain: "home-food-service-30986.firebaseapp.com",
  projectId: "home-food-service-30986",
  storageBucket: "home-food-service-30986.firebasestorage.app",
  messagingSenderId: "329016510764",
  appId: "1:329016510764:web:1f7b8519e9b3d40e108489"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);