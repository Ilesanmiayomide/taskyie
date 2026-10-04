/*
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";;


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCxhtC2BobqGS0LswQRQZYN8cBcV6PgnyY",
  authDomain: "taskey-4cf9a.firebaseapp.com",
  projectId: "taskey-4cf9a",
  storageBucket: "taskey-4cf9a.firebasestorage.app",
  messagingSenderId: "118298093633",
  appId: "1:118298093633:web:79cbd7f139b8e13ae27ec0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
//inputs

// submit button
const submit = document.getElementById("signup");
submit.addEventListener("click", function (event) {
  event.preventDefault()
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
     // Signed up 
      const user = userCredential.user;
      // You can redirect the user or show a success message
      // alert("Creating Account...");
      window.location.href = "change.html";

    //   // ...
     })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
      // ..
    })
})
*/



/*




const supabaseClient = supabase.createClient('https://wgmwhtnhfbvvlzlqdicr.supabase.co',
  'sb_publishable_GkiSXqO_sKL6HmpjGLypaw_GeiZFPZD')

  
  
const createAccountBtn = document.getElementById('signup');

createAccountBtn.addEventListener("click", async function () {
    const userEmail = document.getElementById('email').value;
    const userPassword = document.getElementById('password').value;

    const { data, error } = await supabaseClient.auth.signUp({
        email: userEmail,
        password: userPassword
    });

});



*/




