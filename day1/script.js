var tl = gsap.timeline();

tl.to("#box", {
    x:1000,
    y:-50,
    duration:2,
    delay:0.3,
    rotate:360,
    backgroundColor:"green",
    borderRadius:"50%",
    scale:1.5,
    // repeat:-1,
    // yoyo:true,
})

tl.from("h2",{
    y:30,
    duration:1,
    stagger:0.4,
    opacity:0,
})

var tl2 = gsap.timeline();

tl2.from("#logo",{
    y:-20,
    opacity:0,
    duration:1,
    delay:0.3,
})

tl2.from(".nav-items", {
    y:-20,
    opacity:0,
    stagger:0.4,
})