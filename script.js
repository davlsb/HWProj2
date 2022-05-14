const toggle = document.getElementById('toggle');
const nav = document.getElementById('nav');

nav.classList.toggle('active');


toggle.addEventListener('click', () => {
    nav.classList.toggle('active')
})