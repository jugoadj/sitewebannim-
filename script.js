/**menu responsive */
var menu = document.querySelector('.menu');
var menu_toggle = document.querySelector('.menu_toggle');

menu_toggle.onclick = function(){
    menu_toggle.classList.toggle('active');
    menu.classList.toggle('responsive');
}

/*annimations */

const header = document.querySelector('header');
const title_span = document.querySelectorAll('.left h1 span');
const left = document.querySelector('.left');
const p = document.querySelector('.left p');
const a = document.querySelector('.left a');
const img = document.querySelector('.image_strbks');

window.addEventListener('load' ,()=>{

    const TL = gsap.timeline({paused: true});
    TL
    .staggerFrom(header , 2 , {y:-100 , opacity:0, ease: "power2.out"},0.1)
    .staggerFrom(left, 1 , { opacity:0, ease: "power2.out"},0.1)
    .staggerFrom(title_span, 1 , { opacity:0, ease: "power2.out"},0.1)
    .staggerFrom(p, 1 , { opacity:0, ease: "power2.out"},0.1)
    .staggerFrom(a, 1 , {opacity:0, ease: "power2.out"},0.1)
    .staggerFrom(img  , 1 , {x:100 , opacity:0, ease: "power2.out"},0.1)
 

    TL.play()
})
