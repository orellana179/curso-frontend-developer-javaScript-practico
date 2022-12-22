const navBarEmail = document.querySelector('.navbar-email');
const deskTopMenu = document.querySelector('.desktop-menu');
const menuHamburIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');


navBarEmail.addEventListener('click', toggleDesktopMenu);
menuHamburIcon.addEventListener('click', toggleMobileMenu);

function toggleDesktopMenu() {
    deskTopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    mobileMenu.classList.toggle('inactive');
}