const navbar = document.getElementById("navbar");
window.onscroll = () => {
    if (window.pageYOffset > 200) {
        navbar.classList.remove("top");
    } else {
        navbar.classList.add("top");
    }
};

const navButton = () => {
    const burger = document.querySelector('.burger-menu');
    const nav = document.querySelector('.navbar ul');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        burger.classList.toggle('toggle');
    });
}

navButton();