import { CookieUtil } from "./cookie.js";

export const cart = {
    items: JSON.parse(CookieUtil.get('cart')) || [],    // แปลงจากStringเป็นArray  เก็บไว้ในproperty item หรือถ้าไม่มีcookieให้สร้างArrayเปล่า 

    getQuantity: function() {   //เป็นproperty functoin ที่ใช้นับจำนวนสินค้าในตะกร้า
        return this.items.reduce((total, num) => total + num.quantity, 0 );
    },

    addItemToCart: function (productId) {
        const itemInCart = this.items.find(element => element.productId === productId)      //เช็คว่าProductที่ add เข้ามามีอยู่ในตะกร้าหรือไม่
        if(itemInCart) {
            itemInCart.quantity++;  //ถ้ามีProductแล้ว ให้เพิ่มจำนวน
        } else {
        this.items.push({productId: productId, quantity: 1});       //ถ้าไม่มีProductในตะกร้า ให้เพิ่มProductเข้าไป
        }
        const JSONcart = JSON.stringify(this.items);    //แปลงArray เป้นString
        CookieUtil.set('cart', JSONcart, new Date('December 4, 2021')); //set cookie
    },

    removeCartItem: function () {
        this.items.length = 0;      //ลบข้อมูลสินค้าในตะกร้า
        //const JSONcart = JSON.stringify(this.items);
        // CookieUtil.set('cart', JSONcart, new Date('December 4, 2021'));
        CookieUtil.unset('cart');       //ลบ cookie
    }
};

