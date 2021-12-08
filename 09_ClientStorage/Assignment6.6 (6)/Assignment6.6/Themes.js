const theme = document.querySelector(':root');
const btns = document.querySelectorAll('.change-color');

let yourBg = localStorage.getItem('yourCurrentBg');
theme.style.setProperty("--theme-color", `${yourBg}`);

btns.forEach( (btn) => {
   
    btn.addEventListener("click", (e) => {
        
        const color = e.currentTarget.classList;

        if(color.contains("btn1")){
            theme.style.setProperty
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
        
        if(yourBg !== theme.style.getPropertyValue('--theme-color')) {
            localStorage.setItem('yourCurrentBg', theme.style.getPropertyValue('--theme-color'))
        } else {
            localStorage.setItem('yourCurrentBg', yourBg)
        }

    });
});



