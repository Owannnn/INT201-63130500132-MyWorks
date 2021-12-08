export const search = {
    searchingFunc: function(){
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
                innerDiv[i].style.display = "none"; //css
            }
        }
    },

    toggleSearch: function(){
        const toggle = document.getElementById("input-for-toggle");
        if(toggle.className === 'd-none') {
            toggle.setAttribute('class', 'none') //bootstrap
        } else {
            toggle.setAttribute('class', 'd-none')
        }
    }
}
