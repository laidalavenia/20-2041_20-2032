const hamburgerMenu = document.querySelector('.hamburgermenu')
const mobileMenu = document.querySelector('.arrowup')

hamburgerMenu.addEventListener('click', e => {
   document.querySelector('.mobile-nav').classList.add('show')
   document.querySelector('.overlay').style.display = 'block'
   document.querySelector('body').classList.add('lock')
})
document.querySelector('#close-menu').addEventListener('click', e => {
   document.querySelector('.mobile-nav').classList.remove('show')
   document.querySelector('.overlay').style.display = 'none'
   document.querySelector('body').classList.remove('lock')
})

// mobileMenu.addEventListener('click', e => {
//    document.querySelector('.sub-content').classList.add('show')
//    document.querySelector('.sub-menu').style.display = 'block'
//    document.querySelector('body').classList.add('lock')
// })
// document.querySelector('#arrow-down').addEventListener('click', e => {
//    document.querySelector('.sub-content').classList.remove('show')
//    document.querySelector('.sub-menu').style.display = 'none'
//    document.querySelector('body').classList.remove('lock')
// })

