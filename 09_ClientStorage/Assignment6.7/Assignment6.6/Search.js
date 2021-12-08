//searchIconToggle
export const searchIcon = document.querySelector('#search')
searchIcon.addEventListener('click', () => {
    if(input.className === 'd-none') {
        input.setAttribute('class', 'none')
    } else {
        input.setAttribute('class', 'd-none')
    }
});

