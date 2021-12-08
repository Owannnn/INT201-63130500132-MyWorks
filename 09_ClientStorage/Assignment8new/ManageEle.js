import {product} from "./Product.js"; //import array จาก "./Product.js"
import {searchingFunc } from "./Search.js";
import { CookieUtil } from "./Cookie.js";

let cart = [];

//query div of products as reference node
const divProductsEle = document.querySelector('#products');
    divProductsEle.setAttribute("class", "container row justify-content-center mx-auto");
const cartCount = document.querySelector('#cart-count')


cart = JSON.parse(CookieUtil.get('cart')) || [];       // แปลงจากSringเป็นArray  เพื่อไปดึงcookieมาเก็บในcartหรือถ้าไม่มีcookieให้สร้างArrayเปล่า
cartCount.textContent = getQuantity();             // เปลี่ยนตัวเลขให้เท่ากับจำนวนสินค้าในตะกร้า
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
        pProductNameEle.textContent = 'Product Name: ' + product[i].productName; //h5 เอาไว้สำหรับเก็บ productName
        
        const pProductIdEle = document.createElement('p'); //สร้าง element p
        pProductIdEle.setAttribute('class', 'card-text');
        pProductIdEle.textContent = 'Product Id: ' + product[i].productId; // เอาไว้เก็บ productId
        

        const pProductDescEle = document.createElement('p'); //สร้าง element p
        pProductDescEle.setAttribute('class', 'card-text');
        pProductDescEle.textContent = 'Product Desc: ' + product[i].productDesc; // เอาไว้เก็บ productDesc
        
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
        
        addToCart.addEventListener('click', () => {  //เพิ่มEven 
            const itemInCart = cart.find(pid => pid.product.productId === product[i].productId)
            if(itemInCart) {
                itemInCart.quantity++;
            } else {
            cart.push({product: product[i], quantity: 1});
            }
            const JSONcart = JSON.stringify(cart);  //แปลงArray เป็น String
            CookieUtil.set('cart', JSONcart, new Date('December 4, 2021')) //set cookie
            cartCount.textContent = getQuantity();   
            alert(`${product[i].productId} add in your cart`);
        });
        
        divInside.appendChild(pProductNameEle); // ให้ divInside เป็น child ของ divInside
        divInside.appendChild(pProductIdEle); // ให้ pProductIdEle เป็น child ของ divInside
        divInside.appendChild(pProductDescEle); // ให้ pProductDescEle เป็น child ของ divInside
        divInside.appendChild(pProductPriceEle); // ให้ pProductPriceEle เป็น child ของ divInside
        divInside.appendChild(pProductStockEle); // ให้ pProductStockEle เป็น child ของ divInside
        divInside.appendChild(addToCart); // ให้ addToCart เป็น child ของ divInside
        divProductsEle.appendChild(divProductEle); // ให้ divProductEle ที่เก็บ divInside ไว้ เป็น child ของ divProductsEle
    }    

}

function getQuantity() {    //ฟังก์ชั่นที่นับจำนวนสินค้าในcart
    let totalQuantity = 0;     
    for(let i = 0; i < cart.length; i++){
        totalQuantity += cart[i].quantity;
    }
    return totalQuantity;
}

const removeCart = document.querySelector('#remove-cart')   
removeCart.addEventListener('click', () => {    // เพิ่มปุ่มEvent ให้iconรูปถังขยะ
    cart.length = 0;                            // กำหนดให้cartเป็น Arrayเปล่า
    cartCount.textContent = getQuantity();      //เปลี่ยนตัวเลขให้เป็น 0
    const JSONcart = JSON.stringify(cart);      // แปลงArray เป็น String
    CookieUtil.set('cart', JSONcart, new Date('December 4, 2021'))  // set cookie
})
const filterbtn = document.querySelector('#s-button')
filterbtn.onclick = searchingFunc;

console.log(cart)