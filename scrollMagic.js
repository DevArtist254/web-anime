//Scrolling effects

/**
 * select element
 * add an eventlistener to the window for scroll events

    Setting the trigger point

 * Get position to assit in tracking  from the top 
    ie getBoundClientRect().top

 * Get position of the current window
    ie window.innerHeight 
 */

//The browser triggers the event when the event comes to view #creating-an-observer-intersection

// opts {
//     root //widow,
//     threashold //is view of the element within the area
// }

// //set what we are going to observer
// observer.observe(slide)

// //Entries is access to every el within our observer
// function slideAnime(entries) {
//     entries.forEach(entry => {
//        //if the entry isInterseting then convert it
//     });
// }

// let observer = new IntersectionObserver(slideAnime, opts)

///////////////////////////////////////////////////////
//scroll magic - get debug tool and min cdn and gasp

/**
 * init new ScrollMagic
 * init our tracker to setup scenes 
    .Controller()

 * init our Scene
    .Scene({
        triggerElement: ".hike-exp" //Area,
        triggerHook: 0.5 //threashold
        //To make it not despair
        reverse: false
    })
    .addIndicators(
        //colorStart
        //colorTrigger
    )
    .setClassToggle(
        element 
        classChange
    )
    .addto(controller)

 * When the start and trigger is hit we can add an animation
 */
