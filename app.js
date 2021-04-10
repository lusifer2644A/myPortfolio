var wip= document.getElementsByClassName("wip");

var alertwip= function(){
    alert("Work In Progress!\nBest Wishes\nAnkit");
}

for(var i=0;i<wip.length;i++) {
    console.log("Check");
    wip[i].addEventListener('click',alertwip,false);
}




// Jquery for button scrolls
$(document).ready(function(){
    $('a[href^="#"]').on('click',function (e) {
        // e.preventDefault();

        var target = this.hash;
        var $target = $(target);
        var $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 900, 'swing', function () {
            window.location.hash = target;
        });
    });
});


// For skills animation
var tl = new TimelineMax({onUpdate:updatePercentage});
var tl2 = new TimelineMax();
const controller = new ScrollMagic.Controller();

tl.from(".scroll-anim-span ",0.5,{width:0});


const scene = new ScrollMagic.Scene({
  triggerElement: ".skill-activate",
            triggerHook: "onLeave",
            duration: "50%",
})
  .setPin(".skills-anim-span")
  .setTween(tl)
		.addTo(controller);



function updatePercentage() {
  //percent.innerHTML = (tl.progress() *100 ).toFixed();
  tl.progress();
  console.log(tl.progress());
}




//  Nav Bar

const hamburger=document.querySelector(".hamburger");
const nav_ul=document.querySelector("#navbar ul");
const links=document.querySelector("#navbar ul li");

hamburger.addEventListener('click',(e)=>{
    nav_ul.classList.toggle('open');
})

links.forEach(link => {
    link.classList.toggle('fade');
});
