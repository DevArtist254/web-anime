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

  //Create a scene
  slideScene = new ScrollMagic.Scene({
   triggerElement: slide,
   triggerHook: 0.25,
   reverse: false,
  })
   .setTween(slideT1)
   .addIndicators({
    colorStart: "white",
    colorTrigger: "white",
    name: "slide",
   })
   .addTo(controller)

  const pageT1 = gsap.timeline()
  pageT1.fromTo(slide, {opacity: 1, scale: 1}, {opacity: 0, scale: 0})

  //create new scene to illstrate a scene
  pageScene = new ScrollMagic.Scene({
   triggerElement: slide,
   duration: "100%",
   triggerHook: 0,
  })
   .addIndicators({
    colorStart: "yellow",
    colorTrigger: "yellow",
    name: "page",
    //push inward 200 px
    indent: 200,
   })
   .setPin(slide, {pushFollowers: false})
   .setTween(pageT1)
   .addTo(controller)
 })
}

let mouse = document.querySelector(".cursor")
let mouseTxt = mouse.querySelector("span")

function cursor(e) {
 mouse.style.top = e.pageY + "px"
 mouse.style.left = e.pageX + "px"
}

function activeCursor(e) {
 const element = e.target
 //Check whatever the mouse is targetting
 if (element.id === "logo" || element.classList.contains("burger")) {
  //Then add and remove the targetting class
  mouse.classList.add("nav-active")
 } else {
  //init class
  mouse.classList.remove("nav-active")
 }

 if (element.classList.contains("explore")) {
  mouse.classList.add("explore-active")
  mouseTxt.innerText = "Tap"
 } else {
  //init class
  mouse.classList.remove("explore-active")
  mouseTxt.innerText = ""
 }
}

window.addEventListener("mousemove", cursor)
window.addEventListener("mouseover", activeCursor)

animateSlides()
