var openMenu = document.querySelector('#nav i');
var closeMenu = document.querySelector('#full i');

var timeLine = gsap.timeline();//{paused:true}

timeLine.to('#full',{
    right:0,
    duration:0.25,
})

timeLine.from('h4',{
    x:150,
    stagger:0.1,
    opacity:0,
})

timeLine.from('#full i',{
    opacity:0,
})

timeLine.pause();

openMenu.addEventListener('click', function(){
    timeLine.play();
})

closeMenu.addEventListener('click', function(){
    timeLine.reverse();
})