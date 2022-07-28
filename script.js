const menuIcon = document.querySelector(".hamburger-menu");
const navbar = document.querySelector(".navbar");
const wrapper = document.querySelector(".wrapper");
menuIcon.addEventListener("click", () => {
    navbar.classList.toggle("change");
    wrapper.classList.toggle("open");
});

var hoverDistort = new hoverEffect({
    parent: document.querySelector('.wrapper'),
    intensity: 0.1,
    image1: 'img_one.jpg',
    image2: 'img_two.jpg',
    displacementImage: '4.png'
});