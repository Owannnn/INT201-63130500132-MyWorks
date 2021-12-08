const theme = document.querySelector(':root'); 
const btns = document.querySelectorAll('.change-color');

let yourBg = localStorage.getItem('yourCurrentBg');     //สร้างตัวแปรเก็บBackgroundปัจจุบัน
theme.style.setProperty("--theme-color", `${yourBg}`);  // setหน้าเว็บให้เป็นสีที่เราใช้ล่าสุด

btns.forEach( (btn) => {    // เพิ่ม Event ให้ทั้ง 4 ปุ่ม
   
    btn.addEventListener("click", (e) => {      
        
        const color = e.currentTarget.classList;       

        if(color.contains("btn1")){ 
            theme.style.setProperty     // เปลี่ยน style ของ:root
            ("--theme-color", "white");
        }
        else if(color.contains("btn2")){
            theme.style.setProperty
            ("--theme-color", "wheat");
        } 
        else if(color.contains("btn3")){
            theme.style.setProperty
            ("--theme-color", "gray");
        }
        else{
            theme.style.setProperty
            ("--theme-color", "#52565e");
        }

        //localStorage.setItem('yourCurrentBg', theme.style.getPropertyValue('--theme-color'))
        
        if(yourBg !== theme.style.getPropertyValue('--theme-color')) {      // เช็คว่าถ้าสีในlocal storages ไม่เท่ากับสีที่เราใช้ในปัจจุบัน
            localStorage.setItem('yourCurrentBg', theme.style.getPropertyValue('--theme-color'))    //ถ้าไม่เท่า ให้เอาสีที่เลือกกใหม่ไปเก็บในlocal storages
        } else {
            localStorage.setItem('yourCurrentBg', yourBg)
        }

    });
});



