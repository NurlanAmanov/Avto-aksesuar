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
        stock: "Stokda yoxdur"
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
        stock: "Stokda yoxdur" 
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
        stock: "Stokda var"
    }
];

const mehsularcontainer = document.getElementById('mehsularcontainer');
let mehsulcard = document.querySelector(".mehsulcard")
let likes=document.getElementById("likes")

for (let i =0; i < mehsul.length; i++) {
    const borderrengim = mehsul[i].stock === "Stokda var" ?"#5BC904" : "#FF0000";
    const stockIcon = mehsul[i].stock === "Stokda var"
        ? '<i class="fa-solid fa-circle-check"></i>'
        : '<i class="fa-solid fa-circle-xmark stokyox"></i>';

    mehsularcontainer.innerHTML += `
        <div class="mehsulcard">
       
          <div class="mehsul-img">
            <img src="${mehsul[i].images[0]}" alt="mehsul">
          </div>
          <div class="mehsular-text">
            <h6>${mehsul[i].model}</h6>
            <h5>${mehsul[i].name}</h5>
            <div class="stok ">${stockIcon} <span style="color: ${mehsul[i].stock === "Stokda var" ?"#5BC904" : "#FF0000"}">${mehsul[i].stock}</span></div>
            <p>${mehsul[i].price} ${mehsul[i].currency}</p>
            <button class="sebetat2deskt"> <i class="fa-solid fa-cart-shopping"></i>Səbətə əlavə et</button>
            <button class="sebetat2mobile"> <i class="fa-solid fa-cart-shopping"></i></button>
          </div>
        </div>`  
}
        function toggleMenu() {
            const menu = document.querySelector(".menu-bars");
            menu.classList.toggle("open");
        }
    