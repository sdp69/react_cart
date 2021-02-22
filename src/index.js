import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import  firebase from "firebase";
import 'firebase/firestore';


//initialize firebase
const firebaseConfig = {
    apiKey: "AIzaSyBTZxZKF6Za3S4DatzSHHokGHYhMNxGyCI",
    authDomain: "cart-9b394.firebaseapp.com",
    projectId: "cart-9b394",
    storageBucket: "cart-9b394.appspot.com",
    messagingSenderId: "701484279137",
    appId: "1:701484279137:web:27a03e59bb58da4f5b1120",
    measurementId: "G-3MLV2K6CNF"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
