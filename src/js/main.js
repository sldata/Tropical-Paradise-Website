const nav = document.querySelector('.nav')
const burgerBtn = document.querySelector('.burger-btn')
const navItems = document.querySelectorAll('.nav__item')
const navItemsAnimaton = document.querySelector('.nav-items-animaton')

const handleNav = () => {
	nav.classList.toggle('nav--active') 
     
     navItems.forEach((item)=>{
          item.addEventListener('click', ()=>{
             nav.classList.remove ('nav--active')
          })
     })
     handleNavItemsAnimation()
}
const handleNavItemsAnimation=()=>{
     let delayTime = 0;

     navItems.forEach(item =>{
          item.classList.toggle('nav-items-animaton')
          item.style.animationDelay = '.' + delayTime + 's'
          delayTime++
     })
}

burgerBtn.addEventListener('click', handleNav)
