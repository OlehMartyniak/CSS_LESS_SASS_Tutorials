const hamburger = document.getElementsByClassName("hamburger")[0];
const navMenu = document.getElementsByClassName("nav-menu")[0];

hamburger.addEventListener("click", ()=> {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})