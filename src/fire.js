// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: "login-3747a",
    storageBucket: "login-3747a.appspot.com",
    messagingSenderId: "831537513501",
    appId: "1:831537513501:web:4faeac56c050e347b132f4"
};

export const fire = initializeApp(firebaseConfig);
export const auth = getAuth(fire);
