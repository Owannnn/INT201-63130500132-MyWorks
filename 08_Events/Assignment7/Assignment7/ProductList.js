import {divProductsEle} from "./ManageEle.js";
import {product} from "./Product.js"; //import array จาก "./Product.js"
const productList = () => {
    //for loop เพื่อแสดงสินค้าแต่ละชิ้น
        for (let i = 0; i < product.length; i++) { 
            
        const divProductEle = document.createElement('div'); //สร้าง element div 
        divProductEle.setAttribute('id', product[i].productId);
        divProductEle.setAttribute('class', 'card');
        divProductEle.setAttribute('style', 'width: 18rem; margin: 0 auto; margin-bottom: 10px');
        console.log(divProductEle);
    
        const pProductImgEle = document.createElement('img'); //สร้าง element img
        pProductImgEle.id = 'img'+(i+1);
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
        pProductNameEle.id = 'n'+(i+1);
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
        pProductStockEle.id = 'q'+(i+1);
        pProductStockEle.setAttribute('class', 'card-text');
        pProductStockEle.textContent = 'Quantity: ' + product[i].inStock; // เอาไว้เก็บ productStock
        
        const cart = [];
        const addToCart = document.createElement('BUTTON'); // สร้าง element a
        // addToCart.setAttribute('href', '#');
        addToCart.id = 'p'+(i+1);
        addToCart.setAttribute('class', 'btn btn-primary');
        addToCart.textContent = 'Add to cart'; // ให้ a เป็นปุ่ม addToCart
        addToCart.addEventListener('click', () => {     // เพิ่ม event ใน addToCart เมื่อคลิกแล้วจะแสดง alert ขึ้นมา
            alert(`${product[i].productId} add in your cart`);
            const itemInCart = cart.find(pid => pid.product.productId === product[i].productId) // ใช้ค้นหา product id ที่คลิกมาว่าตรงกับ 
                                                                                                // product ใน arrayไหม
            if(itemInCart) { // ถ้ามี product ซ้ำ ให้เพิ่มจำนวนเข้าไป
                itemInCart.quantity++;
            } else {        // ถ้ายังไม่มีจะสร้างขึ้นมาเก็บ ใน cart[]
            cart.push({product: product[i], quantity: 1});
            }
            console.log(cart)
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
    export {productList};