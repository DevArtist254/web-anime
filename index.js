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
let navBar = document.querySelector(".nav-bar")
let budger = document.querySelector(".burger")
let line1 = document.querySelector(".line1")
let line2 = document.querySelector(".line2")

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

function toggleNavMenu(e) {
 if (!e.target.classList.contains("active")) {
  gsap.to(line1, 0.5, {rotate: "45%", y: 5, background: "black"})
  gsap.to(line2, 0.5, {rotate: "-45%", y: -5, background: "black"})
  gsap.to(navBar, 1, {
   clipPath: "circle(2500px at 100% -10%)",
  })
  gsap.to("#logo", 1, {color: "black"})
  e.target.classList.add("active")
 } else {
  gsap.to(line1, 0.5, {rotate: "0", y: 0, background: "white"})
  gsap.to(line2, 0.5, {rotate: "0", y: 0, background: "white"})
  gsap.to(navBar, 1, {
   clipPath: "circle(50px at 100% -10%)",
  })
  gsap.to("#logo", 1, {color: "white"})
  e.target.classList.remove("active")
 }
}

budger.addEventListener("click", toggleNavMenu)
window.addEventListener("mousemove", cursor)
window.addEventListener("mouseover", activeCursor)

animateSlides()
