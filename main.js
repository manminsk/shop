// Получить модальный
let modal = document.getElementById("myModal");

// Получить кнопку, которая открывает модальный
let btn = document.getElementById("myBtn");

// Получить элемент <span>, который закрывает модальный
let span = document.getElementsByClassName("close")[0];

let btnOk = document.getElementsByClassName("ok")[0];

let cancel = document.getElementsByClassName("cancel")[0];

// Когда пользователь нажимает на кнопку, откройте модальный
btn.onclick = function() {
    modal.style.display = "block";
}

// Когда пользователь нажимает на <span> (x), закройте модальное окно
span.onclick = function() {
    modal.style.display = "none";
}

btnOk.onclick = function() {
    modal.style.display = "none";
}

cancel.onclick = function () {
    modal.style.display = "none";
}

document.addEventListener('keydown', function(e){
    if(e.key === 'Escape') {
        modal.style.display = "none"
    }
})

// Когда пользователь щелкает в любом месте за пределами модального, закройте его
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

//Информация о диване


function readMore () {
    let dots = document.getElementById("dots");
    let btn = document.getElementById("btn");

    if(dots.style.display === "none") {
        dots.style.display = "inline";
        btn.innerHTML = "Скрыть";
    } else {
        dots.style.display = "none";
        btn.innerHTML = "Подробнее";
    }
}




                            //Sliders

let position = 0;
const slidesToShow = 4;
const slidesToScroll = 1;
const products = document.querySelector('.best-products');
const bestPosition = document.querySelector('.best-products__position');
const items = document.querySelectorAll('.slider-item')
const btnPrev = document.querySelector('.btn-prev');
const btnNext = document.querySelector('.btn-next');
const itemsCount = items.length;
const itemWidth = products.clientWidth / slidesToShow;
const movePosition = slidesToScroll * itemWidth;

items.forEach((item) => {
    item.style.minWidth = `${itemWidth}px`;
});

btnNext.addEventListener('click', () => {
    const itemsLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;

    position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

    setPosition();
    checkBtns();
});

btnPrev.addEventListener('click', () => {
    const itemsLeft = Math.abs(position) / itemWidth;

    position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

    setPosition();
    checkBtns();
});

const setPosition = () => {
    bestPosition.style.transform = `translateX(${position}px)`;
};

const checkBtns = () => {
    btnPrev.disabled = position ===0;
    btnNext.disabled = position <= -(itemsCount - slidesToShow) * itemWidth;
};

checkBtns();


                            //Menu

let menuBtn = document.querySelector('.menu-btn');
let menuBurger = document.querySelector('.menu-burger');

menuBtn.addEventListener('click', function(){
    menuBtn.classList.toggle('active');
    menuBurger.classList.toggle('active');
});

let active = document.querySelector('.active');
let text = document.querySelector('.text');
let table = document.querySelector("#table-one");
let slide = document.querySelector('.slide');




                    //Search

let search = document.getElementById('icon-search');
let show = document.querySelector('.show');


search.addEventListener("click", function ()  {
    show.classList.toggle('show');
});

