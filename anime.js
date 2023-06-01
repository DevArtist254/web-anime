//GSAP
gsap.to(
 //Selected element
 revealImg,
 //duration
 1,
 {
  //Our animated css
  x: "100%",
  opacity: 0.5,
 }
)

// Creating a timeline to chain events
const eventTimeline1 = gasp.timeline({
 //defaults global animation obj
 default: {
  duration: 1,
  ease: "power2.inOut",
 },
})

eventTimeline1.fromTo(
 //element selected
 element,
 //from init start point animation
 {x: "50%"},
 //to end point of animation,
 {x: "100%"},
 //Animation diff startup from our init default duration
 "-=1"
)

//Anime count
const displaySc = [1, 0, -1, 0.5]
