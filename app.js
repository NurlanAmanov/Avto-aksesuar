const marka=[
    {
        modeller:"BMW",
    },
    {
        modeller:"HYUNDAI",
    },
    {
        modeller:"INFINITI",
    },
    {
        modeller:"JAGUAR",
    },
    {
        modeller:"KIA",
    },
    {
        modeller:"LAND ROVER",
    },
    {
        modeller:"LEXUS",
    },
    {
        modeller:"MASERATI",
    },
    {
        modeller:"MERCEDES BENZ",
    },
    {
        modeller:"MINI",
    },
]

const mehsul = [
    {
        images: [
            "img/mehsul1.png",
            "img/mehsul2.png",
        ],
        model: "SKU: 61346969134",
        name: "Cigarette Lighter",
        price: 279.29,
        currency: "AZN",
        stock: "Stokda var"
        
    },
    {
        images: [
            "img/mehsul1.png",
            "img/mehsul2.png",
        ],
        model: "SKU: 61346969134",
        name: "Cigarette Lighter",
        price: 18.29,
        currency: "AZN",
        stock: "Stokda yoxdur"
    },
    {
        images: [
            "img/mehsul1.png",
            "img/mehsul2.png",
        ],
        model: "SKU: 61346969134",
        name: "Cigarette Lighter",
        price: 279.29,
        currency: "AZN",
        stock: "Stokda var"
    },
    {
        images: [
            "img/mehsul1.png",
            "img/mehsul2.png",
        ],
        model: "SKU: 61346969134",
        name: "Cigarette Lighter",
        price: 18.29,
        currency: "AZN",
        stock: "Yoldadır" 
    },
    {
        images: [
            "img/mehsul1.png",
            "img/mehsul2.png",
        ],
        model: "SKU: 61346969134",
        name: "Cigarette Lighter",
        price: 279.29,
        currency: "AZN",
        stock: "Yoldadır" 
    },
    {
        images: [
            "img/mehsul1.png",
            "img/mehsul2.png",
        ],
        model: "SKU: 61346969134",
        name: "Cigarette Lighter",
        price: 18.29,
        currency: "AZN",
        stock: "Stokda var"
    },
    {
        images: [
            "img/mehsul1.png",
            "img/mehsul2.png",
        ],
        model: "SKU: 61346969134",
        name: "Cigarette Lighter",
        price: 279.29,
        currency: "AZN",
        stock: "Stokda yoxdur"
    },
    {
        images: [
            "img/mehsul1.png",
            "img/mehsul2.png",
        ],
        model: "SKU: 61346969134",
        name: "Cigarette Lighter",
        price:279.29,
        currency: "AZN",
        stock: "Stokda var"
    },
    {
        images: [
            "img/mehsul1.png",
            "img/mehsul2.png",
        ],
        model: "SKU: 61346969134",
        name: "Cigarette Lighter",
        price: 18.29,
        currency: "AZN",
        stock: "Stokda yoxdu",
        stock: "Yoldadır" 
    },
    {
        images: [
            "img/mehsul1.png",
            "img/mehsul2.png",
        ],
        model: "SKU: 61346969134",
        name: "Cigarette Lighter",
        price: 18.29,
        currency: "AZN",
        stock: "Stokda yoxdu",
        stock: "Yoldadır" 
    },
    {
        images: [
            "img/mehsul1.png",
            "img/mehsul2.png",
        ],
        model: "SKU: 61346969134",
        name: "Cigarette Lighter",
        price: 18.29,
        currency: "AZN",
        stock: "Stokda yoxdu",
        stock: "Yoldadır" 
    },
    {
        images: [
            "img/mehsul1.png",
            "img/mehsul2.png",
        ],
        model: "SKU: 61346969134",
        name: "Cigarette Lighter",
        price: 279.29 ,
        currency: "AZN",
        stock: "Stokda var",
      
    }
];

const mehsularcontainer = document.getElementById('mehsularcontainer');
let mehsulcard = document.querySelector(".mehsulcard")
let like=document.getElementById("like")
const markalar=document.getElementById("markalar")
const markalar2=document.getElementById("markalar2")

const markaad= new Set()
const markaad2= new Set()

for(let j=0;j<marka.length;j++){
    markaad.add(marka[j].modeller)
    markaad2.add(marka[j].modeller)
}

const elavemarka=Array.from(markaad)

function markaadd(){
 markalar.innerHTML=''
 markalar2.innerHTML=''
    for (let j = 0; j < elavemarka.length; j++){
       
        markalar.innerHTML+=`<option>${elavemarka[j]}</option>`
        markalar2.innerHTML+=`<option>${elavemarka[j]}</option>`
    }
}
markaadd()


for (let i = 0; i < mehsul.length  ; i++) {

    const borderrengim = mehsul[i].stock === "Stokda var" ? "#5BC904" : "#FF0000";
    const stockcolor = mehsul[i].stock === "Yoldadır" ? "#FFA115" : "#5BC904";
    const stockIcon = mehsul[i].stock === "Stokda var" 
        ? '<i class="fa-solid fa-circle-check"></i>'
        : '<i class="fa-solid fa-circle-xmark stokyox"></i>';

    mehsularcontainer.innerHTML += `
        <div class="mehsulcard">
          <div class="mehsul-img">
            <div class="like">
              <div class="like-content">
                <i class="fa-solid fa-heart"></i>
              </div>
            </div>
            <img src="${mehsul[i].images[0]}" alt="mehsul">
          </div>
          <div class="mehsular-text">
            <h6>${mehsul[i].model}</h6>
            <h5>${mehsul[i].name}</h5>
            <div class="stok">${stockIcon} <span style="color: ${borderrengim}">${mehsul[i].stock}</span></div>
            <p>${mehsul[i].price} ${mehsul[i].currency}</p>
            <button class="sebetat2deskt"> <i class="fa-solid fa-cart-shopping"></i>Səbətə əlavə et</button>
            <button class="sebetat2mobile"> <i class="fa-solid fa-cart-shopping"></i></button>
          </div>
        </div>`;
         
}

const likeIcons = document.querySelectorAll('.like-content i');

likeIcons.forEach(icon => {
    icon.addEventListener('click', function() {
     
        this.style.color = this.style.color === 'rgb(255, 0, 0)' ? '#DFDFDF' : '#FF0000';
    });
});

        function toggleMenu() {
            const menu = document.querySelector(".menu-bars");
            menu.classList.toggle("open");
        }
    