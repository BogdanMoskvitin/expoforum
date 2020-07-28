const burger = document.querySelector('#header__burger');
const menu = document.querySelector("#header__menu");
const boxsearchlang = document.querySelector("#header__boxsearchlang")

function pressButton(){
    burger.classList.toggle('active');
    menu.classList.toggle('active');
    boxsearchlang.classList.toggle('active')
};

burger.addEventListener("click", pressButton)