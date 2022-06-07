
//firebaseConfig
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js";
import {getAuth, GoogleAuthProvider, signInWithPopup,signOut,onAuthStateChanged} from "https://www.gstatic.com/firebasejs/9.8.2/firebase-auth.js";
import{getStorage,ref,getDownloadURL,uploadBytesResumable} from "https://www.gstatic.com/firebasejs/9.8.2/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyBX6PYMq3fBiuQ6Zz3wpsmuIypAyZj2krY",
  authDomain: "scrape-metals.firebaseapp.com",
  projectId: "scrape-metals",
  storageBucket: "scrape-metals.appspot.com",
  messagingSenderId: "728042346596",
  appId: "1:728042346596:web:af956857fbbc5e4388a771",
  measurementId: "G-DGMQQYER2Y"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const auth=getAuth(app);
 const projectStorage=getStorage(app);

 export{auth, projectStorage,ref,getDownloadURL,uploadBytesResumable}