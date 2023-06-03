/**
 * data-barba - container is the data that will change
 * data-barba - wrapper is to init in our body html
 * data-barba-namespace - home{page} fn name
 */

barba.init({
 //init our pages
 views: [
  {
   namespace: "home",
   beforeEnter() {
    animate()
    logo.href = "./index.html"
   },
   beforeLeave() {
    //side or controller destroy
   },
  },
  {
   namespace: "fashion",
   beforeEnter() {
    //Update links in our TDZ
    logo.href = "../index.html"
   },
  },
 ],
 transitions: [
  {
   leave({current, next}) {
    const done = this.async()
    //Current page before you leave
    timeline.fromTo(
     current.container,
     1,
     {x: 1},
     {x: 0, onComplete: done},
     "-=0.5"
    )
    //next page before you leave
   },
   enter({current, next}) {
    //scroll to the top
    window.scrollTo(0, 0)

    const done = this.async()
    //Next page before you leave
    timeline.fromTo(
     swipe,
     1,
     {x: 0},
     {
      x: 100,
      stagger: 0.2,
      onComplete: done,
     }
    )
    timeline.fromTo(next.container, 1, {x: 0}, {x: 1, onComplete: done})
   },
  },
 ],
})

//Avoiding the poping effects
// body {
//     position: relative;
// }
// main {
//     position : absolute;

// }
