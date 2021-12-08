import {productList} from "./ProductList.js";
import {searchProduct,searchingFunc} from "./Search.js";

    // ตัวนับจำนวนใน cart ของสินค้า
    let cartCounter = 0; 
    // let cartShow = [];
    const myCart = () => {  // เก็บข้อมูล element ที่เกี่ยวกับ cart
        const divCart = document.createElement('div');
        divCart.id = 'carting';
        const imgCart = document.createElement('img');
        imgCart.src = ('images/Cart.png');
        imgCart.width = 25;
        imgCart.height = 25;
        // imgCart.onclick = showCart;

        // number of cart
        const pCart = document.createElement('p');
        pCart.id = 'textCart'
        pCart.textContent = 'Your Cart: '+cartCounter;

        divCart.appendChild(imgCart);
        divHeadingEle.appendChild(divCart);
        divCart.appendChild(pCart);
    }

    const addCart = () =>{ // เก็บจำนวนรายการที่เพิ่มเข้ามา
        cartCounter++;
        // cartShow[i] = document.getElementById();
        document.getElementById('textCart').innerHTML = 'Your Cart: '+cartCounter;
    }

    // const showCart = () => {
    //     alert();
    // }

    //heading
    const divHeadingEle = document.querySelector('#heading');
    console.log(divHeadingEle);
    searchProduct();
    myCart();
    

    //div products
    const divProductsEle = document.querySelector('#products');
    divProductsEle.setAttribute("class", "container row justify-content-center mx-auto");
    console.log(divProductsEle);
    productList();
    searchingFunc();

    // var addbtn = document.getElementsByClassName('btn-primary');
    // addbtn.onclick = addCart;
    // console.log(addbtn);
    // for(let i = 0; i<addbtn.length;i++){
    //     var button = addbtn[i];
    //     button.addEventListener('click',addCart());
    // }
    const btn1 = document.querySelector("#p1"); // เก็บ button ของแต่ละ product
    btn1.onclick = addCart;
    const btn2 = document.querySelector("#p2");
    btn2.onclick = addCart;
    const btn3 = document.querySelector("#p3");
    btn3.onclick = addCart;
    const btn4 = document.querySelector("#p4");
    btn4.onclick = addCart;
    const btn5 = document.querySelector("#p5");
    btn5.onclick = addCart;
    const btn6 = document.querySelector("#p6");
    btn6.onclick = addCart;
    const btn7 = document.querySelector("#p7");
    btn7.onclick = addCart;
    const btn8 = document.querySelector("#p8");
    btn8.onclick = addCart;
    const btn9 = document.querySelector("#p9");
    btn9.onclick = addCart;



    export {divHeadingEle,divProductsEle} ;