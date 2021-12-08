//searchIconToggle
export const searchIcon = document.querySelector('#search')
searchIcon.addEventListener('click', () => {
    if(input.className === 'd-none') {
        input.setAttribute('class', 'none')
    } else {
        input.setAttribute('class', 'd-none')
    }
});

export const searchingFunc = () => { // เป็นฟังก์ชันในการ filter ของ product ที่ต้องการค้นหา
    var input, filter, outerDiv, innerDiv,h5, i, txtValue;
    input = document.getElementById("input-text");
    filter = input.value.toUpperCase();
    outerDiv = document.getElementById("products");
    innerDiv = outerDiv.getElementsByTagName("div");

    for (i = 0; i < innerDiv.length; i++) {
        h5 = innerDiv[i].getElementsByTagName("h5")[0];
        txtValue = h5.textContent || h5.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            innerDiv[i].style.display = "";
        } else {
            innerDiv[i].style.display = "none";
        }
    }
}
