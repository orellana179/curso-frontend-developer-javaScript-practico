const navBarEmail = document.querySelector('.navbar-email');
const deskTopMenu = document.querySelector('.desktop-menu');
const menuHamburIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const productDetails = document.querySelector('.product-detail');
const navbarShopingCart = document.querySelector('.navbar-shopping-cart');

navBarEmail.addEventListener('click', toggleDesktopMenu);
menuHamburIcon.addEventListener('click', toggleProductDetail);
navbarShopingCart.addEventListener('click', toggleProductDetail);

function toggleDesktopMenu() {
    deskTopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    mobileMenu.classList.toggle('inactive');
}

function toggleProductDetail() {
    const isMobileMenuInactive = mobileMenu.classList.contains('inactive');
    const isProductDetailInactive = productDetails.classList.contains('inactive');
    if(isMobileMenuInactive){
        productDetails.classList.add('inactive');
        mobileMenu.classList.remove('inactive');
    }else if(isProductDetailInactive){
        productDetails.classList.remove('inactive');
        mobileMenu.classList.add('inactive');
    }
}