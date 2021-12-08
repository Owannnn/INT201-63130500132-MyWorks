function bank(loan) { // function bank เป็น outer function มี parameter loan(เงินกู้) เพื่อมารับค่าจำนวนเงินกู้ 
    
    let amount =loan; //สร้างตัวแปร amount ขึ้นเพื่อมาเก็บจำนวนเงินที่ได้กู้ยืม

    function summary(pay = "โปรดใส่จำนวนเงิน") { 
        /*function summary เป็น inner function มี parameter pay(จำนวนเงินที่ชำระ) เพื่อมารับจำนวนเงินที่ต้องการชำระ 
        เป็น default parameter เมื่อไม่ได้ป้อนข้อมูลจำนวนเงินที่ชำระเข้ามาจะ return "โปรดใส่จำนวนเงิน"*/ 

        if(pay <= 0) return "ใส่จำนวนเงินไม่ถูกต้อง โปรดใส่จำนวนเงินใหม่"; // ถ้าจำนวนเงินน้อยกว่าหรือเท่ากับ 0 return "ใส่จำนวนเงินไม่ถูกต้อง"
        if(amount >= pay){ // เช็คว่าจำนวนหนี้มากกว่าหรือเท่ากับจำนวนเงินที่ชำระหรือไม่ 
            amount -= pay; // ถ้าใช่ ให้นำจำนวนเงินที่ชำระมาหักออกจากหนี้
            return `ยอดชำระ: ${pay} ยอดค้างชำระ: ${amount}`; 
        }else if(amount < pay){ //เช็คว่าจำนวนหนี้น้อยกว่าจำนวนเงินที่ชำระหรือไม่
            return `ชำระเงินเกินจำนวน โปรดใส่จำนวนเงินใหม่ (ยอดค้างชำระ: ${amount})`; //ถ้าใช่ ก็ให้ใส่จำนวนเงินใหม่
        }else{
            return pay; // return default parameter
        }
    }

    return summary; // return inner(summary) function
}


export{ bank as func1 };

// const people1 = bank(1000);
// console.log(people1(400));
// console.log(people1(5000));
// console.log(people1());