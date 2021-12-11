 // Import the functions you need from the SDKs you need
//  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.0/firebase-app.js";
//  import {getFirestore, collection, getDocs} from "https://www.gstatic.com/firebasejs/9.6.0/firebase-firestore.js"
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 const firebaseConfig = {
  apiKey: "AIzaSyAOExbK8YJEfcvFw4xZ3plQHT3mFc3SqqQ",
  authDomain: "satori-19903.firebaseapp.com",
  projectId: "satori-19903",
  storageBucket: "satori-19903.appspot.com",
  messagingSenderId: "236821111513",
  appId: "1:236821111513:web:49f7020bfcae3397d654c8"
};

firebase.initializeApp(firebaseConfig);
let db = firebase.firestore();
let auth = firebase.auth();
 
const logoutUser = () =>{
   auth.signOut();
   location.reload();
}


