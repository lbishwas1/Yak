gsap.from(".hero", {duration: 3, x: 300, opacity: 0, scale: 0.5});
gsap.from(".first-feat", {duration: 4, x: 300, ease: "bounce"});
gsap.from(".second-feat", {duration: 4, x: 300, ease: "bounce", delay:1});
gsap.from(".third-feat", {duration: 4, x: 300, ease: "bounce", delay:2});
gsap.to(".map", {duration: 1, scale: 0.9, y: 20});
gsap.from(".one", {duration: 2, x: 300, opacity: 0});
gsap.from(".two", {duration: 2, x: -300, opacity: 0});


function slideright() {
    document.querySelector(".navbar").style.transform="translate(0px)";
    document.querySelector(".fa-bars").style.display="none";
    document.querySelector(".fa-times").style.transform="translate(0px)";
   

  }
  function slideleft() {
    document.querySelector(".navbar").style.transform="translate(-250px)";
    document.querySelector(".fa-times").style.transform="translate(0px)";
    document.querySelector(".fa-bars").style.display="block";
    document.querySelector(".fa-times").style.transform="translate(-250px)";
  }