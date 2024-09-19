import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";

// Firebase konfiqurasiya məlumatları
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

// Giriş edilmiş istifadəçi üçün səhifəyə yönləndirin
onAuthStateChanged(auth, (user) => {
    if (user) {
        const storedEmail = localStorage.getItem('userEmail');
        if (storedEmail === user.email) {
            window.location.href = "page/sexsikabinet.htm";
        }
    }
});

// Şəxsi kabinetə yönləndirmək üçün funksiya
function kabinetgo() {
    const storedEmail = localStorage.getItem('userEmail');
    if (storedEmail) {
        // İstifadçi artıq giriş edibsə kabinetə yönləndir
        window.location.href = "page/sexsikabinet.htm";
    } else {
        // Əks halda giriş səhifəsinə yönləndir
        window.location.href = "page/login.htm";
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const button2 = document.getElementById('button2');
    const notification = document.getElementById('notification');

    // Şifrə ilə giriş funksiyası
    button2.addEventListener("click", function(event) {
        event.preventDefault();

        const mail = document.getElementById('mail').value;
        const pass = document.getElementById('pass').value;

        signInWithEmailAndPassword(auth, mail, pass)
            .then((userCredential) => {
                const user = userCredential.user;

                localStorage.setItem('userEmail', user.email);

                alert('Giriş uğurlu oldu! Yönləndirilir...');

                setTimeout(() => {
                    window.location.href = "page/sexsikabinet.htm";
                }, 1000);
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

    // HTML-dəki linkin onclick hadisəsinə kabinetgo funksiyasını əlavə edin
    const kabinetLink = document.getElementById('colorkabinet');
    if (kabinetLink) {
        kabinetLink.onclick = kabinetgo;
    } else {
        console.error("Element 'colorkabinet' tapılmadı.");
    }
});
