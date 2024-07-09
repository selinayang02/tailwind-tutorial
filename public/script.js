const hamburgerBtn = document.getElementById('menu-btn')
const navMenu = document.getElementById('menu')

hamburgerBtn.addEventListener('click', () => {
    hamburgerBtn.classList.toggle('open')
    navMenu.classList.toggle('flex')
    navMenu.classList.toggle('hidden')
})