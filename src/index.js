import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { getfirestore } from "firebase/firestore"

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBqrmSCvuIQvy6JVccq-x0x4ftlRTgkMQw",
  authDomain: "coderhouse-lodepedro.firebaseapp.com",
  projectId: "coderhouse-lodepedro",
  storageBucket: "coderhouse-lodepedro.appspot.com",
  messagingSenderId: "1078884749274",
  appId: "1:1078884749274:web:65e02e0de3a6aa8db67ae3",
  measurementId: "G-B8ZQSZB65N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);