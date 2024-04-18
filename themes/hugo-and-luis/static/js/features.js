const menuToggle = document.querySelector('.menu-toggle');
const mainMenu = document.querySelector('.main-menu');

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
  mainMenu.classList.toggle('active');
});