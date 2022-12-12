
$(document).ready(function(){
  
    // //hamburger menu navbar
    // const headerNav = document.querySelector('.header-nav');
    // const menu = document.querySelector('.menu-btn');
    // const mobileTransparent= document.querySelector('.transparent');
    // const mobileWhite= document.querySelector('.white');
    // const mobileHeader = document.querySelector('.header');
    // const logoWhite = document.querySelector('.navbar-logo-white');
    // const logoBlack = document.querySelector('.navbar-logo-black');

    // menu.addEventListener('click', () => {
    //     headerNav.classList.toggle('mobile-menu-active');
    //     if(mobileTransparent){
    //         mobileHeader.classList.toggle('mobile-menu-active');
    //         menu.classList.toggle('close');
    //         logoWhite.classList.toggle('visible');
    //         logoBlack.classList.toggle('visible');
    //         console.log('hello')
    //         return;
    //     }
    //     else if(mobileWhite){
    //         mobileHeader.classList.toggle('mobile-menu-active');
    //         menu.classList.toggle('close');
    //         // logoWhite.classList.toggle('visible');
    //         // logoBlack.classList.toggle('visible');
    //     }
    //     else {
    //         console.log('hi')
    //         mobileHeader.classList.toggle('mobile-menu-active');
    //         menu.classList.toggle('close');
    //         // logoWhite.classList.toggle('visible');
    //         // logoBlack.classList.toggle('visible');
    //     }             

    // })


})
   

    //fade animation
    const fadeInLeft = document.querySelectorAll('.fade-in-left');
    const fadeIn = document.querySelectorAll('.fade-in');
    const fade = document.querySelectorAll('.fade');

    const appearOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px 0px 0px"
    };
    
    const appearOnScroll = new IntersectionObserver(function(
        entries,
        appearOnScroll) {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                // console.log(entry);
                entry.target.classList.add("appear");
                appearOnScroll.unobserve(entry.target);
            } else {
                return;
            }
        });
    },
    appearOptions);
    
    //fadeInLeft animation
    fadeInLeft.forEach(fader => {
        appearOnScroll.observe(fader);
    });

    fadeIn.forEach(fader => {
        appearOnScroll.observe(fader);
    });

    fade.forEach(fade => {
        appearOnScroll.observe(fade)
    })

  



// let current = 0;
// let target = 0;
// let ease = 0.4;

// let windowWidth, containerHeight;

// let scrollWrap = document.getElementsByClassName("smooth-scroll-wrapper")[0];

// function setTransform(el, transform){
//     el.style.transform = transform;
// }

// function setUpAnimation(){
//     containerHeight = scrollWrap.getBoundingClientRect().height;
//     document.body.style.height = `${containerHeight}px`  
//     smoothScroll();
// }

// function smoothScroll(){
//     current = current * (1 - ease) + target * ease;
//     current = parseFloat(current.toFixed(2));
//     target = window.scrollY;

//     setTransform(scrollWrap, `translateY(${-current * ease }px)`)
//     window.requestAnimationFrame(smoothScroll)
// }


// setUpAnimation();