let dice = {side:6} //กำหนดค่าลูกเต๋า
let playerResult = [];
function play(round) {// round กำหนดจำนวนรอบ
    let index = 0; //กำหนดให้ตัวแปร index ให้มีค่าเท่ากับ 0 เพื่อที่จะไว้ใช้กำหนดตำแหน่งเพื่อเก็บข้อมูลใส่ใน array
    for(let count=1;count <= round ;count++){ // กำหนดจำนวนรอบในการเล่น
        player1.roll = rollDice(); //player1 ทอยลูกเต๋า , เข้าถึง key "roll" ผ่าน obj player1 เพื่อเปลี่ยนให้ value ให้เป็นเลขของลูกเต๋าที่ทอยได้
        player2.roll = rollDice(); //player2 ทอยลูกเต๋า , เข้าถึง key "roll" ผ่าน obj player2 เพื่อเปลี่ยนให้ value ให้เป็นเลขของลูกเต๋าที่ทอยได้
        console.log("round :"+count);
        if(player1.roll > player2.roll){ //player1 ชนะ
            player1.result = results.WIN //เข้าถึง key "result" ผ่าน obj player1 เพื่อเปลี่ยนให้ value ให้เป็น WIN
            player2.result = results.LOSE //เข้าถึง key "result" ผ่าน obj player2 เพื่อเปลี่ยนให้ value ให้เป็น LOSE
            console.log(player1);
            console.log(player2);
            console.log(player1.name +":  Win!!")
        }else if(player1.roll === player2.roll){ // เสมอ
            player1.result = results.DRAW //เข้าถึง key "result" ผ่าน obj player1 เพื่อเปลี่ยนให้ value ให้เป็น DRAW
            player2.result = results.DRAW //เข้าถึง key "result" ผ่าน obj player2 เพื่อเปลี่ยนให้ value ให้เป็น DRAW
            console.log(player1);
            console.log(player2);
            console.log("Draw!!")
        }else{                              //player2 ชนะ
            player1.result = results.LOSE //เข้าถึง key "result" ผ่าน obj player1 เพื่อเปลี่ยนให้ value ให้เป็น LOSE
            player2.result = results.WIN //เข้าถึง key "result" ผ่าน obj player2 เพื่อเปลี่ยนให้ value ให้เป็น WIN
            console.log(player1);
            console.log(player2);
            console.log(player2.name +":  Win!!")
        }
        playerResult[index++] = player1; //นำ object player1 ไปเก็บไว้ใน array 
        playerResult[index++] = player2; ////นำ object player1 ไปเก็บไว้ใน array ในตำแหน่งถัดไป
    }
}
const results = {   //เก็บค่าผลการแข่งขัน
    WIN: "Win",
    DRAW: "Draw",
    LOSE: "Lose"
}


function rollDice() {   //สุ่มเลขลูกเต๋า
    return  Math.floor( 1 + Math.random() * 6 ); //Math.floor: กำหนดผลลัพธ์ให้เป็นจำนวนเต็ม
}                                                   //Math.random: สุ่มเลขในช่วง 1-6


let player1 = { //เก็บค่าต่างๆของ player1
    name: "Mild", //ชื่อ player1
    roll: 0, //แต้มลูกเต๋า
    result: results //ผลลัพธ์ที่ได้
}
let player2 = { //เก็บค่าต่างๆของ player2
    name: "Mint", //ชื่อ player1
    roll: 0, //แต้มลูกเต๋า
    result: results //ผลลัพธ์ที่ได้
}

console.log("-------------")
play(5); //ใส่จำนวนรอบ
console.log("-------------")

console.log(playerResult);