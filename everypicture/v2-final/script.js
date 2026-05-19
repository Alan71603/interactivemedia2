(function(){
    'use strict';
    console.log('Reading JS');

    window.addEventListener('load', function () {
        const sliderContent = document.querySelector('.a');

        const sliderWidth = sliderContent.offsetWidth;

        const cloned = sliderContent.cloneNode(true);
        cloned.className = "b";

        document.querySelector('.slider').appendChild(cloned);

        let root = document.querySelector(':root');

        const endLeftPos = `-${sliderWidth}px`;    
        root.style.setProperty('--sliderwidth', endLeftPos);

        document.querySelector('.slider').classList.add("animate");
    });

    const bubble = document.querySelector('#bubble')

    document.querySelector('#manuel').addEventListener('pointerenter', function() {
    bubble.innerHTML = "Manuel says: Congrats bro, I still don't believe it";
    bubble.style.display = 'block';
    });

    document.querySelector('#manuel').addEventListener('pointerleave', function() {
    bubble.style.display = 'none';
    });

    document.querySelector('#brandon').addEventListener('pointerenter', function() {
    bubble.innerHTML = "Brandon says: I'm still waiting for the April Fools";
    bubble.style.display = 'block';
    });

    document.querySelector('#brandon').addEventListener('pointerleave', function() {
    bubble.style.display = 'none';
    });

    document.querySelector('#jarge').addEventListener('pointerenter', function() {
    bubble.innerHTML = 'Jarge: So are we still able to hit the hookah?';
    bubble.style.display = 'block';
    });

    document.querySelector('#jarge').addEventListener('pointerleave', function() {
    bubble.style.display = 'none';
    });

    document.querySelector('#noe').addEventListener('pointerenter', function() {
    bubble.innerHTML = "Noe: Dedicated to Drake, and his wife now too I guess";
    bubble.style.display = 'block';
    });

    document.querySelector('#noe').addEventListener('pointerleave', function() {
    bubble.style.display = 'none';
    });

    document.querySelector('#kev-jeff').addEventListener('pointerenter', function() {
    bubble.innerHTML = "Kev & Jeff say: Bro is actually getting married";
    bubble.style.display = 'block';
    });

    document.querySelector('#kev-jeff').addEventListener('pointerleave', function() {
    bubble.style.display = 'none';
    });

    document.querySelector('#me').addEventListener('pointerenter', function() {
    bubble.innerHTML = "Chris says: All this for the bit is kinda crazy";
    bubble.style.display = 'block';
    });

    document.querySelector('#me').addEventListener('pointerleave', function() {
    bubble.style.display = 'none';
    });

    document.querySelector('#ivan').addEventListener('pointerenter', function() {
    bubble.innerHTML = 'Ivan says "ICEMAN WAS A NICE MAN, NOW IM HOT AND COLD"';
    bubble.style.display = 'block';
    });

    document.querySelector('#ivan').addEventListener('pointerleave', function() {
    bubble.style.display = 'none';
    });


})();