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
    bubble.textContent = 'Manuel says: Congrats bro, you finally did it!';
    bubble.style.display = 'block';
    });

    document.querySelector('#manuel').addEventListener('pointerleave', function() {
    bubble.style.display = 'none';
    });

    document.querySelector('#brandon').addEventListener('pointerenter', function() {
    bubble.textContent = 'Brandon';
    bubble.style.display = 'block';
    });

    document.querySelector('#brandon').addEventListener('pointerleave', function() {
    bubble.style.display = 'none';
    });

    document.querySelector('#jarge').addEventListener('pointerenter', function() {
    bubble.textContent = 'Jarge';
    bubble.style.display = 'block';
    });

    document.querySelector('#jarge').addEventListener('pointerleave', function() {
    bubble.style.display = 'none';
    });

    document.querySelector('#noe').addEventListener('pointerenter', function() {
    bubble.textContent = 'Noe';
    bubble.style.display = 'block';
    });

    document.querySelector('#noe').addEventListener('pointerleave', function() {
    bubble.style.display = 'none';
    });

    document.querySelector('#kev-jeff').addEventListener('pointerenter', function() {
    bubble.textContent = 'Kev-Jeff';
    bubble.style.display = 'block';
    });

    document.querySelector('#kev-jeff').addEventListener('pointerleave', function() {
    bubble.style.display = 'none';
    });

    document.querySelector('#me').addEventListener('pointerenter', function() {
    bubble.textContent = 'Me';
    bubble.style.display = 'block';
    });

    document.querySelector('#me').addEventListener('pointerleave', function() {
    bubble.style.display = 'none';
    });

    document.querySelector('#ivan').addEventListener('pointerenter', function() {
    bubble.textContent = 'Ivan';
    bubble.style.display = 'block';
    });

    document.querySelector('#ivan').addEventListener('pointerleave', function() {
    bubble.style.display = 'none';
    });


})();