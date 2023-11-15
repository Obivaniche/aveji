/* Стили */
import './index.css';

/* Стили Swiper slider */
import 'swiper/css';

/* Импорт Swiper slider */
import Swiper from 'swiper';

/* Swiper slider */
const sliderMain = new Swiper('.slider', {
    freeMode: true,
    mousewheel: true,
    slidesPerView: 1.3345,
    spaceBetween: 20,
    setWrapperSize: true,
    breakpoints: {
        1440: {
            slidesPerView: 3,
            spaceBetween: 17
        },
    }
});

/* Сылки навигации */
const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
const heroLink = document.querySelector('.hero__link[data-goto]');

/* Скролл к разделу заказа */
heroLink.addEventListener('click', onHeroLinkClick);

function onHeroLinkClick() {
    heroLink.dataset.goto && document.querySelector(heroLink.dataset.goto)
    const gotoBlock = document.querySelector(heroLink.dataset.goto);
    const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY - document.querySelector('header').offsetHeight;

    window.scrollTo({
        top: gotoBlockValue,
        behavior: 'smooth'
    });
}

/* Открытие меню */
const menuIcon = document.querySelector('.menu__icon');
const menuContainer = document.querySelector('.menu__container');
const page = document.querySelector('.page');

if (menuIcon) {
    menuIcon.addEventListener('click', function () {
        menuIcon.classList.toggle('menu__icon_active');
        menuContainer.classList.toggle('menu__container_active');
        page.classList.toggle('page_lock');
    });
};

/* Скролл и закрытие меню */
if (menuLinks.length > 0) {
    menuLinks.forEach(function (menuLink) {
        menuLink.addEventListener('click', onMenuLinkClick);
    });

    function onMenuLinkClick(e) {
        const menuLink = e.target;
        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY - document.querySelector('header').offsetHeight;

            if (menuIcon.classList.contains('menu__icon_active')) {
                menuIcon.classList.remove('menu__icon_active');
                menuContainer.classList.remove('menu__container_active');
                page.classList.remove('page_lock');
            }

            window.scrollTo({
                top: gotoBlockValue,
                behavior: 'smooth'
            });
            e.preventDefault();
        }
    }
};

/* Замена текста заголовков */
const aboutTitle = document.querySelector('.about__title');

if (window.innerWidth >= 1440) {
    aboutTitle.innerHTML = 'Более 5 лет создаем мебель для вашего комфорта';
}

/*Отключаем слайдер на пк*/

/*Визуализация figcapture при наведении курсора*/


/* Кнопка наверх */
const scrollButton = document.querySelector('.scroll-button');

window.addEventListener('scroll', trackScroll);
scrollButton.addEventListener('click', scrollUp);

function trackScroll() {
    const scroll = window.scrollY;
    const height = document.documentElement.clientHeight;
    if (scroll > height / 2) {
        scrollButton.classList.add('scroll-button_active');
    } else {
        scrollButton.classList.remove('scroll-button_active');
    }
}

function scrollUp() {
    if (window.scrollY > 0) {
        window.scrollBy(0, -25);
        setTimeout(scrollUp, 0);
    }
}