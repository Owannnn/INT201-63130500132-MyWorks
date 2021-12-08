const theme = document.querySelector(':root');

export const themes = {
    currentBg: localStorage.getItem('yourCurrentBg'),       //ไปดึงbackgroundในlocal storage มาเก็บไว้ในProperty currentBg

    setToCurrentBg: function() {        //เป็นProperty function ที่ใช้เปลี่ยนbackgroundตามlocal storage
        theme.style.setProperty("--theme-color", `${this.currentBg}`);
    },

    changeBg: function(color) {     //เป็นProperty function ที่ใช้เปลี่ยน background
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

        if( this.currentBg !== theme.style.getPropertyValue('--theme-color')) {     // เช็คว่าถ้าสีในlocal storages ไม่เท่ากับสีที่เราใช้ในปัจจุบัน
            localStorage.setItem('yourCurrentBg', theme.style.getPropertyValue('--theme-color'));    //ถ้าไม่เท่า ให้เอาสีที่เลือกกใหม่ไปเก็บในlocal storage
        } else {
            localStorage.setItem('yourCurrentBg', this.currentBg);
        }
    }
}









