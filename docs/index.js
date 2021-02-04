const burger = document.querySelector('#burger');
const menu = document.querySelector('#menu');
const navbar = document.querySelector('#navbar');

burger.addEventListener('click', () => {
    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
        navbar.classList.replace('flex', 'block');
        
    } else {
        menu.classList.add('hidden');
        navbar.classList.replace('block', 'flex');
    }
});

