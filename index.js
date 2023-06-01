//Create a scene
let controller, slideScene

function animateSlides() {
 //Init Controller
 controller = new ScrollMagic.Controller()

 //Select what you want to anime
 const sliders = document.querySelectorAll(".slide")
 const nav = document.querySelector(".nav-header")

 //Loop over each slide
 sliders.forEach((slide) => {
  const revealImg = slide.querySelector(".reveal-img")
  const img = slide.querySelector("img")
  const revealText = slide.querySelector(".reveal-text")

  //GSAP
  //Set our timeline
  const slideT1 = gsap.timeline({
   //defaults
   defaults: {
    duration: 1,
    ease: "power2.inOut",
   },
  })

  slideT1.fromTo(revealImg, {x: "0%"}, {x: "100%"})
  slideT1.fromTo(img, {scale: "2"}, {scale: "1"}, "-=1")
  slideT1.fromTo(revealText, {x: "0%"}, {x: "100%"}, "-=0.5")
  slideT1.fromTo(nav, {y: "-100%"}, {y: "0%"}, "-=0.5")
 })
}

animateSlides()
