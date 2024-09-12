const data = [
    {
         images: ["../img/mehsul1.png", "../../img/mehsul1.png"],
        model: "SKU: 61346969134",
        name: "Cigarette Lighter",
        price: 279.29,
        currency: "AZN",
        stock: "Stokda var"
        
    },
    {
         images: ["../img/mehsul1.png", "../../img/mehsul1.png"],
        model: "SKU: 61346969134",
        name: "Cigarette Lighter",
        price: 18.29,
        currency: "AZN",
        stock: "Stokda yoxdur"
    },
    {
         images: ["../img/mehsul1.png", "../../img/mehsul1.png"],
        model: "SKU: 61346969134",
        name: "Cigarette Lighter",
        price: 279.29,
        currency: "AZN",
        stock: "Stokda var"
    },
    {
         images: ["../img/mehsul1.png", "../../img/mehsul1.png"],
        model: "SKU: 61346969134",
        name: "Cigarette Lighter",
        price: 18.29,
        currency: "AZN",
        stock: "Yoldadır" 
    },
    {
         images: ["../img/mehsul1.png", "../../img/mehsul1.png"],
        model: "SKU: 61346969134",
        name: "Cigarette Lighter",
        price: 279.29,
        currency: "AZN",
        stock: "Yoldadır" 
    },
    {
         images: ["../img/mehsul1.png", "../../img/mehsul1.png"],
        model: "SKU: 61346969134",
        name: "Cigarette Lighter",
        price: 18.29,
        currency: "AZN",
        stock: "Stokda var"
    },
    {
         images: ["../img/mehsul1.png", "../../img/mehsul1.png"],
        model: "SKU: 61346969134",
        name: "Cigarette Lighter",
        price: 279.29,
        currency: "AZN",
        stock: "Stokda yoxdur"
    },
    {
         images: ["../img/mehsul1.png", "../../img/mehsul1.png"],
        model: "SKU: 61346969134",
        name: "Cigarette Lighter",
        price:279.29,
        currency: "AZN",
        stock: "Stokda var"
    },
    {
         images: ["../img/mehsul1.png", "../../img/mehsul1.png"],
        model: "SKU: 61346969134",
        name: "Cigarette Lighter",
        price: 18.29,
        currency: "AZN",
        stock: "Stokda yoxdu",
        stock: "Yoldadır" 
    },
    {
         images: ["../img/mehsul1.png", "../../img/mehsul1.png"],
        model: "SKU: 61346969134",
        name: "Cigarette Lighter",
        price: 18.29,
        currency: "AZN",
        stock: "Stokda yoxdu",
        stock: "Yoldadır" 
    },
    {
         images: ["../img/mehsul1.png", "../../img/mehsul1.png"],
        model: "SKU: 61346969134",
        name: "Cigarette Lighter",
        price: 18.29,
        currency: "AZN",
        stock: "Stokda yoxdu",
        stock: "Yoldadır" 
    },
    {
         images: ["../img/mehsul1.png", "../../img/mehsul1.png"],
        model: "SKU: 61346969134",
        name: "Cigarette Lighter",
        price: 18.29,
        currency: "AZN",
        stock: "Stokda yoxdu",
        stock: "Yoldadır" 
    },
    {
         images: ["../img/mehsul1.png", "../../img/mehsul1.png"],
        model: "SKU: 61346969134",
        name: "Cigarette Lighter",
        price: 18.29,
        currency: "AZN",
        stock: "Stokda yoxdu",
        stock: "Yoldadır" 
    },
    {
         images: ["../img/mehsul1.png", "../../img/mehsul1.png"],
        model: "SKU: 61346969134",
        name: "Cigarette Lighter",
        price: 279.29 ,
        currency: "AZN",
        stock: "Stokda var",
      
    }
];
const mehsularcontainersilder = document.getElementById('mehsularcontainersilder');


function mehsuladd() {
    data.map(item => {
        const borderrengim = item.stock === "Stokda var" ? "#5BC904" : "#FF0000";
        const stockIcon = item.stock === "Stokda var"
            ? '<i class="fa-solid fa-circle-check"></i>'
            : '<i class="fa-solid fa-circle-xmark stokyox"></i>';
        mehsularcontainersilder.innerHTML += `
        <div data-aos="fade-right" class="mehsulcard">
            <div class="mehsul-img">
                <div class="like">
                    <div class="like-content">
                        <i class="fa-solid fa-heart"></i>
                    </div>
                </div>
                <img src="${item.images[0]}" alt="mehsul">
            </div>
            <div class="mehsular-text">
                <h6>${item.model}</h6>
                <h5>${item.name}</h5>
                <div class="stok">${stockIcon} <span style="color: ${borderrengim}">${item.stock}</span></div>
                <p>${item.price} ${item.currency}</p>
                <button class="sebetat2deskt mb-8"> <i class="fa-solid fa-cart-shopping"></i>Səbətə əlavə et</button>
                <button class="sebetat2mobile mb-2"> <i class="fa-solid fa-cart-shopping"></i></button>
            </div>
        </div>`;
    });
}

mehsuladd();

