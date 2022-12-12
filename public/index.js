
$(document).ready(function(){
     
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

})


  

