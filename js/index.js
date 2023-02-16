const navbar = document.querySelector('.navbar-nav');
const hamburgerMenu = document.querySelector('#hamburger-menu');

hamburgerMenu.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

document.addEventListener('click', (e) => {
    if (!hamburgerMenu.contains(e.target) && !navbar.contains(e.target)) {
        navbar.classList.remove('active');
    }
});