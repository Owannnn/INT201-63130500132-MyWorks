// Group4 some() and includes()

// some คือ การตรวจสอบสมาชิกอย่างน้อยหนึ่งตัว(||)ใน array ว่าผ่านเงื่อนไขของฟังก์ชันที่เรากำหนดให้หรือไม่ ถ้ามีสมาชิกอย่างน้อยหนึ่งตัวเป็น True ฟังก์ชันก็จะ return True ออกมา

// syntax
// some((element) => { ... } )
// some((element, index) => { ... } )
// some((element, index, array) => { ... } )

// parameters
// element: element ปัจจุบันใน array
// index: index ปัจจุบันใน array
// array: เป็น array ที่ some ถูกเรียกใช้

// returnValue
// return เป็น Boolean มีค่า true or false

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // สร้าง array nums มาเพื่อเก็บตัวเลข 1-9

const odd = nums.some( element => element % 2 === 1 );
// สร้างตัวแปร odd แล้วเรียก method some ของ array nums โดย some รับ parameter คือ function ที่มี parameter คือ element 
// โดยกำหนดเงื่อนไขของ function คือ array มีสมาชิกที่เป็นเลขคี่หรือไม่
console.log(odd); // return true เพราะว่ามีสมาชิกภายใน array อย่างน้อย1ตัวที่นำไป mod ด้วย 2 แล้วเหลือเศษ 1

const indexN = nums.some((element, index) => index === 9 );
//สร้างตัวแปร indexN แล้วเรียก method some ของ array indexN โดย some รับ parameter คือ function ที่มี parameter คือ element, index
//โดยกำหนดเงื่อนไขของ function คือ array มี index ที่ 9 หรือไม่
console.log(indexN); // return false เพราะว่า index ตัวสุดท้ายคือ 8 

const evenIndex = nums.some((element, index, array) => {
// สร้างตัวแปร evenIndex แล้วเรียก method some ของ array evenIndex โดย some รับ parameter คือ function ที่มี parameter คือ element, index, array
// โดยกำหนดเงื่อนไขของ function คือ array มีสมาชิกที่เป็นเลขคู่และอยู่ในตำแหน่ง index ที่ 7 ของ array หรือไม่
     console.log(array);  //แสดง Array ของ array เป็นแค่การทดสอบว่า ใน nums.some มีการ loop ครบตามที่กำหนดไว้
    return element % 2 === 0 && index === 7;
});

console.log(evenIndex); // return true เพราะว่าใน array ตำแหน่งที่ 7 เป็นเลขคู่ นั่นก็คือเลข 8

//---------------------------------------------------------------------------------------------------------------------------------//

// includes คือ ใช้ค้นหาค่าใน array โดยจะเช็คว่าใน array นั้นมีค่าที่เราต้องการค้นหาหรือไม่

// syntax
// includes(searchElement)
// includes(searchElement, fromIndex)

// parameters
// searchElement: ค่าที่จะใช้ค้นหา
// fromIndex: ตำแหน่งใน array ที่จะใช้เริ่มค้นหา

// returnValue
// return เป็น Boolean มีค่า true or false

let sid = [112, 117, 132, 142, 154]; // สร้าง array sid มาเพื่อเก็บ 3 ตัวท้ายของรหัสนักศึกษา
let sname = ['Sarida', 'Sirapope', 'Orawan', 'Thunnavat', 'Nattapon']; // สร้าง array sname มาเพื่อเก็บชื่อนักศึกษา

console.log(sid.includes(166));
// return false เพราะว่าใน array ไม่มีเลข 166 

console.log(sname.includes('Sirapope'));
// return true เพราะว่าใน array มีชื่อ Sirapope

console.log(sid.includes(112, 1));
// return false เพราะว่าใน array มี 112 ก็จริงแต่เราให้เริ่มค้นหาจากตำแหน่ง index ที่ 1 ซึ่ง 112 อยู่ตำแหน่ง index ที่ 0

console.log(sid.includes(132, 1));
//true เพราะว่าใน array มี 132 อยู่ในตำแหน่ง index ที่ 2 แล้วเราให้เริ่มค้นหาตั้งแต่ตำแหน่ง index ที่ 1