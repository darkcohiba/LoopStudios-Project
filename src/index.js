import './style.css'

const menuButton = document.querySelector('#menu-btn')
const menu = document.getElementById('menu')

menuButton.addEventListener('click', navToggle)

function navToggle(){
    menuButton.classList.toggle('open')
    menu.classList.toggle('flex')
    menu.classList.toggle('hidden')
}