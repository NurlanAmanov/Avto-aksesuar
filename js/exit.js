import { getAuth, signOut } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";

const auth = getAuth(); // Firebase Authentication instansiyasını əldə et

function cixisgo() {
    signOut(auth).then(() => {
        // Çıxış uğurlu oldu
        localStorage.removeItem('userEmail'); // LocalStorage-dan e-poçtu sil
        alert('Çıxış uğurlu oldu!');
        window.location.href = "page/login.htm"; // Giriş səhifəsinə yönləndir
    }).catch((error) => {
        // Çıxış zamanı xəta
        console.error("Çıxış zamanı xəta:", error);
        alert('Çıxışda xəta baş verdi. Yenidən cəhd edin.');
    });
}

// Çıxış düyməsinə event listener əlavə et
document.addEventListener("DOMContentLoaded", function() {
    const logoutButton = document.getElementById('logoutButton');
    if (logoutButton) {
        logoutButton.addEventListener('click', cixisgo);
    } else {
        console.error("Element 'logoutButton' tapılmadı.");
    }
});
