const navBar = document.querySelector('nav')
const navLinks = document.querySelectorAll('.stack')
const moreButton = document.querySelector('.more')
const plus = document.querySelector('.plus')
const main = document.querySelector('#logo-split')

const toggleNav = function(){
    navBar.classList.toggle("open")
    moreButton.classList.toggle('rotate')
    plus.classList.toggle('white')

    navLinks.forEach(link => {
        link.classList.toggle('visible')
    });

}

const bkEd = document.querySelector("#bk")
const scrollLogo = function(){
    const topView = window.pageYOffset
    const midView = topView + (window.innerHeight/2)

    const topSection = main.offsetTop
    const midSection = topSection + (main.offsetHeight/2)

    const distanceToSection = midView - midSection

    bkEd.style.transform = `translate(0, ${distanceToSection/1.5}px)`


}

moreButton.addEventListener('click',toggleNav)
document.addEventListener('scroll',scrollLogo)
