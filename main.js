const navBarEmail = document.querySelector('.navbar-email');
const deskTopMenu = document.querySelector('.desktop-menu');

navBarEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu() {
    deskTopMenu.classList.toggle('inactive');
}