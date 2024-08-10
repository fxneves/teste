const menuButton = document.querySelector('button')
const menu = document.querySelector('.menu')
const articleItems = document.querySelectorAll('article')
const articlePseudoElement = document.querySelector('article:before')

articleItems.forEach((item)=>{
    item.addEventListener('click', ()=>{
        item.classList.toggle('article-modal')
    })
})

menuButton.addEventListener('click', ()=>{
    menu.classList.toggle('show-menu')
    menuButton.classList.toggle('aniMenu')
})

