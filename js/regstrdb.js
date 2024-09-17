import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";

  
    const firebaseConfig = {
        apiKey: "AIzaSyAjQ6R90jV1Zz1TjeyNpVqEXn47iHBWOPY",
        authDomain: "avto-aks.firebaseapp.com",
        projectId: "avto-aks",
        storageBucket: "avto-aks.appspot.com",
        messagingSenderId: "515875003601",
        appId: "1:515875003601:web:e6516f157c78d2250bf9f0",
        measurementId: "G-5RLY7P8V2Q"
    };

 
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);


    const form = document.getElementById('registerForm');
    const errorMessage = document.getElementById('error-message');

    form.addEventListener('submit', (e) => {
        e.preventDefault(); 

        const email = document.getElementById('regstrusermail').value;
        const password = document.getElementById('pass').value;
        const passwordConfirm = document.getElementById('passagn').value;

    
        if (password !== passwordConfirm) {
            errorMessage.textContent = 'Şifrələr uyğun gəlmir.';
            return;
        }


        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
       
                errorMessage.textContent = '';
                alert('Qeydiyyat uğurla tamamlandı!');
                window.location.href = 'sexsikabinet.htm'; 
            })
            .catch((error) => {
        
                const errorCode = error.code;
                const errorMessageText = error.message;
                errorMessage.textContent = `Qeydiyyat zamanı xəta: ${errorMessageText}`;
            });
    });