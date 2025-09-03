var main = document.querySelector('#main');
var cursor = document.querySelector('#cursor');
var imageDiv = document.querySelector('#image');
var box = document.querySelector('#box');

main.addEventListener("mousemove", function(event){
    // console.log(event.x, event.y);
    gsap.to(cursor, {
        x:event.x,
        y:event.y,
        duration:1,
        ease: "back.out",
    });
})

imageDiv.addEventListener('mouseenter', function(event){
    cursor.textContent = 'View More';
    gsap.to(cursor, {
        scale:2,
        backgroundColor:"#ffffff80",
    })
})

imageDiv.addEventListener('mouseleave', function(event){
    cursor.textContent = '';
    gsap.to(cursor, {
        scale:1,
        backgroundColor:'white',
    })
})
