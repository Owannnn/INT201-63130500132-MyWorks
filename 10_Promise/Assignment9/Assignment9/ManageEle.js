import {product} from "./Product.js"; //import array จาก "./Product.js"
import { cart } from "./Cart.js";
import { search } from "./Search.js";
import { themes } from "./Themes.js";

//query div of products as reference node
const divProductsEle = document.querySelector('#products');
const cartCount = document.querySelector('#cart-count');

themes.setToCurrentBg();
//cart.items;
cartCount.textContent = cart.getQuantity();
loadProduct();

//function เพื่อแสดงสินค้าแต่ละชิ้น
function loadProduct() {
    for (let i = 0; i < product.length; i++) { 

        const divProductEle = document.createElement('div'); //สร้าง element div 
        divProductEle.setAttribute('id', product[i].productId);
        divProductEle.setAttribute('class', 'card');
        divProductEle.setAttribute('style', 'width: 18rem; margin: 0 auto; margin-bottom: 10px');

        const pProductImgEle = document.createElement('img'); //สร้าง element img
        pProductImgEle.setAttribute('class', 'card-img-top');
        pProductImgEle.setAttribute('style', 'background-color: #F2F2F2');
        pProductImgEle.src = product[i].productImg; // เอาไว้สำหรับเก็บ Path ของรูปภาพ product
        pProductImgEle.height = 278;
        pProductImgEle.width = 275;
        divProductEle.appendChild(pProductImgEle); // ให้ pProductImgEle เป็น child ของ divProductEle

        const divInside = document.createElement('div'); //สร้าง element div
        divInside.setAttribute('class', 'card-img-top');
        divInside.setAttribute('style', 'padding: 10px');
        divProductEle.appendChild(divInside); // ให้ divInside เป็น child ของ divProductEle

        const pProductNameEle = document.createElement('h5'); //สร้าง element h5
        pProductNameEle.setAttribute('class', 'card-title');
        pProductNameEle.textContent = product[i].productName; //h5 เอาไว้สำหรับเก็บ productName
        
        // const pProductIdEle = document.createElement('p'); //สร้าง element p
        // pProductIdEle.setAttribute('class', 'card-text');
        // pProductIdEle.textContent = 'Product Id: ' + product[i].productId; // เอาไว้เก็บ productId
        

        const pProductDescEle = document.createElement('p'); //สร้าง element p
        pProductDescEle.setAttribute('class', 'card-text');
        pProductDescEle.textContent = product[i].productDesc; // เอาไว้เก็บ productDesc
        
        const pProductPriceEle = document.createElement('p'); //สร้าง element p
        pProductPriceEle.setAttribute('class', 'card-text');
        pProductPriceEle.textContent = 'Price: ' + product[i].price + ' Baht'; // เอาไว้เก็บ productPrice
        

        const pProductStockEle = document.createElement('p'); //สร้าง element p
        pProductStockEle.setAttribute('class', 'card-text');
        pProductStockEle.textContent = 'Quantity: ' + product[i].inStock; // เอาไว้เก็บ productStock
        

        const addToCart = document.createElement('button'); // สร้าง element button
        addToCart.setAttribute('class', 'add-cart');
        addToCart.setAttribute('class', 'btn btn-primary');
        addToCart.textContent = 'Add to cart'; // ให้ button เป็นปุ่ม addToCart
        
        addToCart.addEventListener('click', () => {
            cart.addItemToCart(product[i].productId);
            cartCount.textContent = cart.getQuantity();
            alert(`${product[i].productId} add in your cart`);
        });
        
        divInside.appendChild(pProductNameEle); // ให้ divInside เป็น child ของ divInside
        // divInside.appendChild(pProductIdEle); // ให้ pProductIdEle เป็น child ของ divInside
        divInside.appendChild(pProductDescEle); // ให้ pProductDescEle เป็น child ของ divInside
        divInside.appendChild(pProductPriceEle); // ให้ pProductPriceEle เป็น child ของ divInside
        divInside.appendChild(pProductStockEle); // ให้ pProductStockEle เป็น child ของ divInside
        divInside.appendChild(addToCart); // ให้ addToCart เป็น child ของ divInside
        divProductsEle.appendChild(divProductEle); // ให้ divProductEle ที่เก็บ divInside ไว้ เป็น child ของ divProductsEle
    }    

};

const searchBtn = document.querySelector('#s-button')
searchBtn.addEventListener ('click', ()=>{
    search.searchingFunc();
});

const searchIcon = document.querySelector('#search')
searchIcon.addEventListener ('click', () => {
    search.toggleSearch();
});

const removeCart = document.querySelector('#remove-cart')
removeCart.addEventListener('click', () => {
    cart.removeCartItem();
    cartCount.textContent = 0;
});

const btns = document.querySelectorAll('.change-color');
btns.forEach( (btn) => {
    btn.addEventListener("click", (e) => {
        const color = e.currentTarget.classList;
        themes.changeBg(color);
    });
});
