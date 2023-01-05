const theme1 = document.querySelector('.button-1');
const theme2 = document.querySelector('.button-2');
const theme3 = document.querySelector('.button-3');

const main = document.querySelector('.main');
const h1 = document.querySelector('.header__h1');
const theme = document.querySelector('.header__themes');
const result = document.querySelector('.result');
const buttons = document.querySelector('.buttons');

theme1.addEventListener('click', () => {

    theme1.style.display = 'none';
    theme2.style.display = 'inline-block';

    main.classList.add('main-t2');
    h1.classList.add('header__h1-t2');
    theme.classList.add('header__themes-t2');
    result.classList.add('result-t2');
    buttons.classList.add('buttons-t2');

});

theme2.addEventListener('click', () => {

    theme2.style.display = 'none';
    theme3.style.display = 'inline-block';

    main.classList.remove('main-t2');
    h1.classList.remove('header__h1-t2');
    theme.classList.remove('header__themes-t2');
    result.classList.remove('result-t2');
    buttons.classList.remove('buttons-t2');

    main.classList.add('main-t3');
    h1.classList.add('header__h1-t3');
    theme.classList.add('header__themes-t3');
    result.classList.add('result-t3');
    buttons.classList.add('buttons-t3');

});

theme3.addEventListener('click', () => {

    theme3.style.display = 'none';
    theme1.style.display = 'inline-block';

    main.className = ('main');
    h1.className = ('header__h1');
    theme.className = ('header__themes');
    result.className = ('result');
    buttons.className = ('buttons');

});