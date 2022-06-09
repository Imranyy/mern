
//firebaseConfig
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js";
import {getAuth, GoogleAuthProvider, signInWithPopup,signOut,onAuthStateChanged} from "https://www.gstatic.com/firebasejs/9.8.2/firebase-auth.js";
import{getStorage,ref,getDownloadURL,uploadBytesResumable,deleteObject} from "https://www.gstatic.com/firebasejs/9.8.2/firebase-storage.js";

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

 //Authentication
 const provider= new GoogleAuthProvider();
 //signin
  const signInWithGoogle=()=>{
     signInWithPopup(auth, provider).then((result)=>{
       //console.log(result)
       const name=result.user.displayName;
       const email= result.user.email;
       const pic=result.user.photoURL;

       localStorage.setItem("name",name)
       localStorage.setItem("email",email)
       localStorage.setItem("pic",pic)
     }).then(()=>{
      window.Location.reload();})
 }

    //logOut
   const signout=()=>{
      signOut(auth).then(()=>{ 
         window.location.href='/'
      }).catch(err=>{
        console.log(err.message)
      }) 
    }
    
 


 export{ projectStorage,ref,getDownloadURL,uploadBytesResumable,deleteObject,signInWithGoogle,signout,onAuthStateChanged,auth}