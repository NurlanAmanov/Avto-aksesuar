const marka = [
    {
        modeller: "BMW",
    },
    {
        modeller: "HYUNDAI",
    },
    {
        modeller: "INFINITI",
    },
    {
        modeller: "JAGUAR",
    },
    {
        modeller: "KIA",
    },
    {
        modeller: "LAND ROVER",
    },
    {
        modeller: "LEXUS",
    },
    {
        modeller: "MASERATI",
    },
    {
        modeller: "MERCEDES BENZ",
    },
    {
        modeller: "MINI",
    },
]
const markalar = document.getElementById("markalar")
const markalar2 = document.getElementById("markalar2")
const kabinet = document.getElementById('kabinet')
function toggleMenu() {
    const menu = document.querySelector(".menu-bars");
    menu.classList.toggle("open");
}

function kabinetgo(){
    if(kabinet.style.display==="none"||kabinet.style.display==="" ){
        kabinet.style.display="flex"
    }else{
       kabinet.style.display="none"
    }
}

const markaad = new Set()
const markaad2 = new Set()



for (let j = 0; j < marka.length; j++) {
    markaad.add(marka[j].modeller)
    markaad2.add(marka[j].modeller)
}

const elavemarka = Array.from(markaad)

function markaadd() {
    markalar.innerHTML = ''
    markalar2.innerHTML = ''
    for (let j = 0; j < elavemarka.length; j++) {

        markalar.innerHTML += `<option>${elavemarka[j]}</option>`
        markalar2.innerHTML += `<option>${elavemarka[j]}</option>`
    }
}
markaadd()

function gopage() {
    window.location.href = '../page/single.htm'
}

function kaibnget(){
    window.location.href="page/login.htm"
    let colorkabinet=document.getElementById('colorkabinet')
    let colorkabicon=document.getElementById('colorkabicon')

    colorkabinet.style.color='#FF0000'
    colorkabicon.style.color='#FF0000'

}
function loginkabinet(event) {
    event.preventDefault(); 
    console.log("Funksiya çağrıldı");  
    window.location.href = "../page/sexsikabinet.htm";  
}function passshows() {  
    const pass = document.getElementById('pass'); 
    const hideshow2 = document.getElementById('hideshow2');

    if (pass.type === 'password') {
        pass.type = 'text';  
        hideshow2.src = "../img/password-show.svg";  
    } else {
        pass.type = 'password'; 
        hideshow2.src = "../img/password-hide.svg";  
    }
}
