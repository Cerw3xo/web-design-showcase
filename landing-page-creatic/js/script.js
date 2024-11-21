const hamburger = document.getElementById('hamburger');
const navbar =  document.querySelector('nav');
const overlay = document.getElementById('overlay')

hamburger.addEventListener('click', (event) => {
    event.stopPropagation();
    navbar.classList.toggle('active')
    overlay.classList.toggle('active')
})

window.addEventListener('scroll', () => {
    if (navbar.classList.contains('active')) {
        closeNavbar();
    }
})

function closeNavbar() {
    navbar.classList.remove('active');
    overlay.classList.remove('active')
}

window.addEventListener('click', (event) => {
    if(navbar.classList.contains('active') && !navbar.contains(event.target)) {
        closeNavbar();
    }
})