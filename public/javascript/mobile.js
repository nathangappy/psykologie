const mobile = document.getElementById('mobile-button');
const menu = document.getElementById('mobile-menu')

mobile.addEventListener('click', () => {
  menu.classList.toggle('mobile');
});
