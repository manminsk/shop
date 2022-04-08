const modal = document.getElementById("modal-window");

const btn = document.getElementById("button-menu");

const span = document.getElementsByClassName("close")[0];

const btnOk = document.getElementsByClassName("ok")[0];

const cancel = document.getElementsByClassName("cancel")[0];

const bodyScroll = document.querySelector("body");



btn.onclick = function() {
    modal.style.display = "block";
    bodyScroll.style.overflow = "hidden";
    bodyScroll.classList.toggle('lock');
}

span.onclick = function() {
    modal.style.display = "none";
    bodyScroll.style.overflow = "auto";
}

btnOk.onclick = function() {
    modal.style.display = "none";
    bodyScroll.style.overflow = "auto";
}

cancel.onclick = function () {
    modal.style.display = "none";
    bodyScroll.style.overflow = "auto";
}

document.addEventListener('keydown', function(e){
    if(e.key === 'Escape') {
        modal.style.display = "none"
        bodyScroll.style.overflow = "auto";
    }
})

window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
        bodyScroll.style.overflow = "auto";
    }
}

                                // Show text

const btn2 = document.getElementById('btn');

btn2.addEventListener('click', function() {

const dots = document.getElementById("dots");
const btn = document.getElementById("btn");

    if(dots.style.display === "") {
        dots.style.display = "inline";
        btn.innerHTML = "Скрыть";
    } else {
        dots.style.display = "none";
        btn.innerHTML = "Подробнее";
    }
})

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

const menuBtn = document.querySelector('.menu-btn');
const menuBurger = document.querySelector('.menu-burger');
const body = document.querySelector('body');

menuBtn.addEventListener('click', function(){
    menuBtn.classList.toggle('active');
    menuBurger.classList.toggle('active');
    body.classList.toggle('lock');
});


                    //Search

const search = document.getElementById('icon-search');
const show = document.querySelector('.hide');


search.addEventListener("click", function ()  {
    show.classList.toggle('hide');
});


                    //Tabs

document.querySelectorAll('.tabs-triggers__item').forEach((item) =>
    item.addEventListener('click', function (e) {
        e.preventDefault();
        const id = e.target.getAttribute('href').replace('#', '');

        document.querySelectorAll('.tabs-triggers__item').forEach(
            (child) => child.classList.remove('tabs-triggers__item--active')
        );

        document.querySelectorAll('.tabs-content__item').forEach(
            (child) => child.classList.remove('tabs-content__item--active')
        );

        item.classList.add('tabs-triggers__item--active');
        document.getElementById(id).classList.add('tabs-content__item--active');
    })
);

document.querySelector('.tabs-triggers__item').click();
