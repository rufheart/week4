let divi = document.getElementsByClassName('div-middle-hidden')[0];

function Change(){
    if(divi.style.display=='none'){
        divi.style.display='block'
    }
    else{
        divi.style.display='none'
    }
}

function checkWidth() {
    var viewportWidth = window.innerWidth;
    if (viewportWidth == 1024) {
        divi.style.display = 'none'
    }
    else{
        divi.style.display = 'none'
    }
  }

checkWidth();
window.addEventListener('resize', checkWidth);

let buttons = document.querySelectorAll("[data-carousel-button]")

buttons.forEach(button =>{
    button.addEventListener("click", ()=>{
        const offset = button.dataset.carouselButton === "next" ? 1: -1
        const slides = button.closest("[data-carousel]").querySelector("[data-slides]")
        const activeSlide = slides.querySelector("[data-active]")
        let newIndex = [...slides.children].indexOf(activeSlide)+offset
        if(newIndex<0) newIndex = slides.children.length-1
        if(newIndex>=slides.children.length) newIndex = 0
        slides.children[newIndex].dataset.active = true
        delete activeSlide.dataset.active
    })
})