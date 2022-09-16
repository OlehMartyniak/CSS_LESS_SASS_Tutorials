let btn1 = document.querySelector(".dropdown_icon button");
let btn2 = document.querySelector(".dropdown_desktop button");
let btn3 = document.querySelector(".dropdown_mobile button");

btn1.addEventListener("click", ()=> {
    btn1.classList.toggle("active")
});
btn2.addEventListener("click", ()=> {
    btn2.classList.toggle("active")
});
btn3.addEventListener("click", ()=> {
    btn3.classList.toggle("active")
});