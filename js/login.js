import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";




const slider=document.getElementById('slider')
const leftbtn=document.getElementById('leftbtn')
const rghtbtn=document.getElementById('rghtbtn')
leftbtn.addEventListener('click', () => {
    slider.scrollLeft -= 100; 
  });
  rghtbtn.addEventListener('click', () => {
    slider.scrollLeft += 100; 
  });


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

document.addEventListener("DOMContentLoaded", function() {
    const button2 = document.getElementById('button2');
    const notification = document.getElementById('notification'); 

    // İstifadçi girişini yoxlayın
    redirectIfLoggedIn();

    // Giriş düyməsinə basıldığında
    button2.addEventListener("click", function(event) {
        event.preventDefault();

        const mail = document.getElementById('mail').value;
        const pass = document.getElementById('pass').value;

        signInWithEmailAndPassword(auth, mail, pass)
            .then((userCredential) => {
                const user = userCredential.user;

                // İstifadçi e-poçtunu localStorage-a qeyd edin
                localStorage.setItem('userEmail', user.email);

                notification.innerHTML = `
                    <div class="alert alert-success text-xl" role="alert">
                        Giriş uğurlu oldu! Yönləndirilir...
                    </div>
                `;

                setTimeout(() => {
                    window.location.href = "sexsikabinet.htm";
                }, 2000);
            })
            .catch((error) => {
                const errorMessage = error.message;

                notification.innerHTML = `
                    <div class="alert alert-danger" role="alert">
                        Xəta: ${errorMessage}
                    </div>
                `;
            });
    });
});

// İstifadçi artıq giriş edibsə yönləndirin
function redirectIfLoggedIn() {
    const storedEmail = localStorage.getItem('userEmail');
    onAuthStateChanged(auth, (user) => {
        if (user && user.email === storedEmail) {
            window.location.href = "sexsikabinet.htm";
        }
    });
}

// Çıxış funksiyası
function logout() {
    auth.signOut().then(() => {
        localStorage.removeItem('userEmail');
        window.location.href = "page/login.htm";
    }).catch((error) => {
        console.error("Çıxış zamanı xəta:", error);
    });
}

