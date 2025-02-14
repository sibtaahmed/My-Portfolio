
// function firstPageAnim(){
//     var tl = gsap.timeline();
 
//     tl.from("#nav",{
//         y: '-10',
//         opacity:0,
//         duration:2,
//         ease: Expo.EaseinOut
//     })

//     .to(".boundingelem",{
//         y: 0,
//         duration:2,
//         ease: Expo.EaseinOut,
//         stagger: .2
//     })
 



// }


var timeout;

function synthia(){

var xscale = 1;
var yscale = 1;

var xprev = 0;
var yprev = 0;

        // document.querySelector('#minicircle').style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)`;


    window.addEventListener("mousemove", function(dets){
        document.querySelector('#minicircle').style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)`;
        clearTimeout(timeout);

        xscale =gsap.utils.clamp(.8, 1.2, dats.clientX - xprev);
        yscale =gsap.utils.clamp(.8, 1.2, dats.clientY - yprev);
       
        xprev = dets.clientX;
        yprev = dets.clientY;

        follower(xscale, yscale);

        timeout = setTimeout( function(){
            document.querySelector('#minicircle').style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(1,1)`;
        }, 100);
    
    });  
}
 synthia();

 function follower(xscale, yscale) {
   window.addEventListener("mousemove", function(dets) {
        document.querySelector('#minicircle').style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale}, ${yscale})`;
  })
 }


// synthia();

follower();

// firstPageAnim();