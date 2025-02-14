
function firstPageAnim(){
    var tl = gsap.timeline();
 
    tl.from("#nav",{
        y: -10,
        opacity:0,
        duration:1.5,
        ease: Expo.easeInOut
    })

    .to(".boundingelem",{
        y: 0,
        duration:2,
        delay: -1,
        ease: Expo.easeInOut,
        stagger: .2
    })
 
    .to("#herofooter",{
        y: 10,
        duration:1.5,
        delay: -1,
        ease: Expo.easeInOut

    })


}
firstPageAnim();





    document.addEventListener('mousemove',function(dets){
        var a = document.querySelector('#minicircle');
        a.style.left=dets.pageX + "px";
        a.style.top=dets.pageY + "px";
    });
    



 
document.querySelectorAll(".elem").forEach(function (elem) {
var rotate = 0;
var diffrot = 0;

elem.addEventListener ("mouseleave",function (dets) {
    var diff = dets.clientY - elem. getBoundingClientRect().top;
    diffrot = dets. clientX - rotate;
    rotate = dets.clientX;
    gsap. to(elem. querySelector ("img"), {
    opacity: 0,
    ease: Power3,
   
    });
    });
    

elem.addEventListener ("mousemove",function (dets) {
var diff = dets.clientY - elem. getBoundingClientRect().top;
diffrot = dets. clientX - rotate;
rotate = dets.clientX;
gsap. to(elem. querySelector ("img"), {
opacity: 1,
ease: Power3,
top: diff,
left: dets.clientX,
rotate: gsap.utils.clamp(-20, 20, diffrot * 0.8),
});
});
});


const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});