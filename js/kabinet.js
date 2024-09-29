let isLoggedIn = false; // Girişin olub olmadığını izləyən bayraq

function passresetgo(){
    const resetle = document.getElementById('resetle');
    if(resetle.style.display === 'none' || resetle.style.display === ''){
        resetle.style.display = "block";
    } 
}

function closreset(){
    const resetle = document.getElementById('resetle');
    if(resetle.style.display === 'block'){
        resetle.style.display = "none";
    } 
}

function profduzelis() {
    let profiduzlt = document.getElementById('profiduzlt');
    let unvankitab = document.getElementById('unvankitab');

    if (profiduzlt.style.display === 'flex') {
        profiduzlt.style.display = 'none';
    } else {
        profiduzlt.style.display = 'flex'; 
        unvankitab.style.display = 'none'; 
    }
}

function openumav() {
    let unvankitab = document.getElementById('unvankitab');
    let profiduzlt = document.getElementById('profiduzlt');

    if (unvankitab.style.display === 'none' || unvankitab.style.display === '') {
        unvankitab.style.display = 'flex';
        profiduzlt.style.display = 'none';
    } else {
        unvankitab.style.display = 'none';
    }
}

function dblgo(){
    window.location.href = "../page/login.htm";
    let colorkabinet = document.getElementById('colorkabinet');
    let colorkabicon = document.getElementById('colorkabicon');

    colorkabinet.style.color = '#FF0000';
    colorkabicon.style.color = '#FF0000';
}
const slider=document.getElementById('slider')
const leftbtn=document.getElementById('leftbtn')
const rghtbtn=document.getElementById('rghtbtn')
leftbtn.addEventListener('click', () => {
    slider.scrollLeft -= 100; 
  });
  rghtbtn.addEventListener('click', () => {
    slider.scrollLeft += 100; 
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
  
    const notification = document.getElementById('notification');

   
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

    button2.addEventListener("click", function(event) {
        event.preventDefault();

        const mail = document.getElementById('mail').value;
        const pass = document.getElementById('pass').value;

        signInWithEmailAndPassword(auth, mail, pass)
            .then((userCredential) => {
                const user = userCredential.user;

                localStorage.setItem('userEmail', user.email);
                isLoggedIn = true;

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


document.getElementById('colorkabinet').onclick = function() {
    if (!isLoggedIn) {
        kabinetgo(); 
    }
};
