const theme = document.querySelector(':root');
const btns = document.querySelectorAll('.btn');

btns.forEach(function(btn){
   
    btn.addEventListener("click", function(e){
        
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
    });
});

let visit = localStorage.getItem('visit');
if (visit === null) {
    localStorage.setItem('visit', 1);
} else {
    localStorage.setItem('visit', ++visit);
}

//localStorage.setItem('btn2');
//localStorage.setItem('btn3');
//localStorage.setItem('btn4');