import {divHeadingEle} from "./ManageEle.js";
const searchProduct = () => { //ฟังก์ชันที่รวมเกี่ยวกับการ search กำหนด element ต่างๆ
    // สร้าง search div 
    const divSearch = document.createElement('div')
    divSearch.id = 'searching';
    // Icon
    const searchIcon = document.createElement('img');
    searchIcon.id = 'icon';
    searchIcon.src = ('images/Search.png');
    searchIcon.width = 30;
    searchIcon.height = 30;
    searchIcon.onclick = toggleSearch;
    divSearch.appendChild(searchIcon);
    // panel
    const searchPanel = document.createElement('input');
    searchPanel.type = 'text';
    searchPanel.id = 'Input';
    // searchPanel.onkeyup = searchingFunc;
    searchPanel.placeholder = 'Search for name';
    searchPanel.style.display = 'none'
    divSearch.appendChild(searchPanel);
    divHeadingEle.appendChild(divSearch);
    
    //Button
    const searchButton = document.createElement("BUTTON");
    searchButton.id = "searchBtn";
    searchButton.onclick = searchingFunc;
    searchButton.style.display = 'none'
    divSearch.appendChild(searchButton);
    searchButton.textContent = "SEARCH";
    }

    const toggleSearch = () => { // ใช้ในการกด แสดง/ซ่อน panel,button ของ search
        var inBtn = document.getElementById("searchBtn");
    var inPanel = document.getElementById("Input");
    if (inBtn.style.display === "none" && inPanel.style.display === "none") {
        inBtn.style.display = "block";
        inPanel.style.display = "block";
    } else {
        inBtn.style.display = "none";
        inPanel.style.display = "none";
    }
    }

    const searchingFunc = () => { // เป็นฟังก์ชันในการ filter ของ product ที่ต้องการค้นหา
        var input, filter, outerDiv, innerDiv,h5, i, txtValue;
        input = document.getElementById("Input");
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

export {searchProduct,searchingFunc};