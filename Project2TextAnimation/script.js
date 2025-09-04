var h1 = document.querySelector('h1');
var splittedText = h1.textContent.split('');

var clutter = "";

splittedText.forEach(function(element, idx){
    if(idx<=splittedText.length/2)
        clutter = clutter + `<span class="a">${element}</span>`
    else 
        clutter = clutter + `<span class="b">${element}</span>`

});
// console.log(clutter)
h1.innerHTML = clutter;

gsap.from('.a', {
    y:50,
    opacity:0,
    duration:1,
    stagger:0.15
})

gsap.from('.b', {
    y:50,
    opacity:0,
    duration:1,
    stagger:-0.15
})