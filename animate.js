const animatedTags = document.querySelectorAll("h1, p, .image")

animatedTags.forEach(tag =>{
   tag.style.opacity = 0;
})

const fadeIn = function (){
    animatedTags.forEach(tag =>{
        let delay = 0.25;
      const tagTop = tag.getBoundingClientRect().top
      const tagBottom = tag.getBoundingClientRect().bottom

      if (tagTop < window.innerHeight && tagBottom > 0){
        tag.style.animation = `fadein 1s ${delay}s both`
        delay += 0.25
      } else{
        tag.style.opacity = 0;
        tag.style.animation = ""
      }

     })
     
}

fadeIn()
document.addEventListener('scroll',fadeIn)
window.addEventListener('resize', fadeIn)