const btnMenu = document.querySelector('.btn-rond-menu');
const nav = document.querySelector('.nav-gauche');
const allItemNav = document.querySelector('.nav-menu-item');
const ligne = document.querySelector('.cont-ligne');

btnMenu.addEventListener('click',()=>{
    
    ligne.classList.toggle('active');
    nav.classList.toggle('menu-visible');

})

if(window.matchMedia("(max-width: 1300px)")){
    allItemNav.forEach('click',()=>{
        ligne.classList.toggle('active');
        nav.classList.toggle('menu-visible');
    })
}