var h1 = document.querySelector('#effect-one');
var splittedText = h1.textContent.split('');

var clutter = "";

splittedText.forEach(function (element, idx) {
    if (idx <= splittedText.length / 2)
        clutter = clutter + `<span class="a">${element}</span>`
    else
        clutter = clutter + `<span class="b">${element}</span>`

});
// console.log(clutter)
h1.innerHTML = clutter;

gsap.from('.a', {
    y: 50,
    opacity: 0,
    duration: 1,
    stagger: 0.15
})

gsap.from('.b', {
    y: 50,
    opacity: 0,
    duration: 1,
    stagger: -0.15
})



// effect two
var effectTwoH1 = document.querySelector('#effect-two');
var words = effectTwoH1.textContent.split(' ');

var effectTwoClutter = '';

words.forEach((word) => {
    effectTwoClutter += `<span class="word">${word}</span>&nbsp;`;
});

effectTwoH1.innerHTML = effectTwoClutter;

gsap.from(".word", {
    scale: 1.5,
    filter: "blur(8px)",
    opacity: 0,
    duration: 0.5,
    stagger: 0.3,
});

gsap.to(".word", {
    color: 'white',
    delay: 0.8,
    stagger: 0.3
})
