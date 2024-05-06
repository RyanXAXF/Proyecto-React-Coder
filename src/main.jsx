import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import "./index.css"
import { initializeApp } from 'firebase/app'

const firebaseConfig = {
    apiKey: "AIzaSyA2URMb9Ln4m16iu7CBic3G_kUCMqPkvug",
    authDomain: "prueba-fea65.firebaseapp.com",
    projectId: "prueba-fea65",
    storageBucket: "prueba-fea65.appspot.com",
    messagingSenderId: "1046210568954",
    appId: "1:1046210568954:web:686ff889f087b24b4cdf43"
  };

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(  
    <App />
)
