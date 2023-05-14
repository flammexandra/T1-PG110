// Import the functions you need from the SDKs you need
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAD43n71TDR55V_QoH9Z-aW8iudRuai2dU",
  authDomain: "flarmelexandra.firebaseapp.com",
  projectId: "flarmelexandra",
  storageBucket: "flarmelexandra.appspot.com",
  messagingSenderId: "195811032571",
  appId: "1:195811032571:web:51a8a8ab27958a7df19f5e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

console.log("Connected to firebase :=)")
console.log(app.name)



const auth = getAuth(app)

function register(email, password){
  createUserWithEmailAndPassword(auth, email, password).then((user)=>{
      console.log("User created !")
      console.log(user);
  });
}

function login(email, password){
  signInWithEmailAndPassword(auth, email, password).then((user) => {
    console.log("User connected !")
    console.log(user);
  });
}


const form = document.getElementById('connection-form')
console.log(form)
form.addEventListener('submit', (e) => {
  event.preventDefault(); // Empêche le formulaire de se soumettre

  const email = document.getElementsByName('loginName')[0].value;
  const password = document.getElementsByName('loginPassword')[0].value;

  login(email, password);

})
