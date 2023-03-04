// toggle 

const NavbarNav = document.querySelector
('.navbar-nav');
// ketika menu di klik
document.querySelector('#hamburger-menu').onclick = () => {

    NavbarNav.classList.toggle('active');
};

// klik di luar sidebar

const hamburger = document.querySelector('#hamburger-menu');

document.addEventListener('click', function (e){
    if (!hamburger.contains(e.target) && !NavbarNav.contains(e.target)) {
        NavbarNav.classList.remove('active');
    } 
});
