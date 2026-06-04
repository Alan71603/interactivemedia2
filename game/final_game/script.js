(function(){
    'use strict';
    console.log('reading JS');

    const startGame   = document.querySelector('#startgame');
    const gameControl = document.querySelector('#gamecontrol');
    const game        = document.querySelector('#game');
    const score       = document.querySelector('#score');
    const actionArea  = document.querySelector('#actions');

    const img1 = document.querySelector('#img1');
    const img2 = document.querySelector('#img2');

    const winSound  = new Audio('audio/666280__logatron__oldtada.wav');
    const failSound = new Audio('audio/853057__silverillusionist__password-fail-harsh-denial.wav');

    const images = {
        p1: {
            idle:  'images/redfishing.png',
            sad:   'images/redskip.png',
            snake: 'images/redbeat.png',
            win:   'images/redwinner.png',
            wait:  'images/redwaiting.png'
        },
        p2: {
            idle:  'images/bluefishing.png',
            sad:   'images/blueskip.png',
            snake: 'images/bluebeat.png',
            win:   'images/bluewinner.png',
            wait:  'images/bluewaiting.png'
        }
    };

    const gameData = {
        dice: ['1fish.png', '2fish.png', '3fish.png',
               '4fish.png', '5fish.png', '6fish.png'],
        players: ['Player 1', 'Player 2'],
        score: [0, 0],
        roll1: 0,
        roll2: 0,
        rollSum: 0,
        index: 0,
        gameEnd: 29
    };

    function setImages(state) {
        if (gameData.index === 0) {
            img1.src = images.p1[state];
            img2.src = images.p2.wait;
        } else {
            img2.src = images.p2[state];
            img1.src = images.p1.wait;
        }
    }

    function setActivePlayer() {
        document.querySelector('#p1').classList.toggle('active', gameData.index === 0);
        document.querySelector('#p2').classList.toggle('active', gameData.index === 1);
    }

    startGame.addEventListener('click', function(){

        gameData.index = Math.round(Math.random());
        gameData.score = [0, 0];
        console.log(gameData.index);

        gameControl.innerHTML = '<h2>The Game Has Started</h2>';
        gameControl.innerHTML += '<button id="quit">Wanna Quit?</button>';

        document.querySelector('#quit').addEventListener('click', function(){
            location.reload();
        });

        setActivePlayer();
        setUpTurn();

    });

    function setUpTurn(){
        setActivePlayer();
        setImages('idle');

        game.innerHTML = `<p>Roll the dice for <strong>${gameData.players[gameData.index]}</strong></p>`;
        actionArea.innerHTML = '<button id="roll">Roll the Dice</button>';

        document.querySelector('#roll').addEventListener('click', function(){
            throwDice();
        });
    }

    function throwDice(){

        actionArea.innerHTML = '';
        gameData.roll1 = Math.floor(Math.random() * 6) + 1;
        gameData.roll2 = Math.floor(Math.random() * 6) + 1;

        game.innerHTML = `<p>Roll the dice for <strong>${gameData.players[gameData.index]}</strong></p>`;
        game.innerHTML += `<img src="images/${gameData.dice[gameData.roll1-1]}"> <img src="images/${gameData.dice[gameData.roll2-1]}">`;

        gameData.rollSum = gameData.roll1 + gameData.roll2;

        if (gameData.rollSum === 2) {
            failSound.play();
            setImages('snake');
            game.innerHTML += '<p>Oh Snap! Snake Eyes! A sea lion stole your fish!</p>';
            gameData.score[gameData.index] = 0;
            showCurrentScore();
            gameData.index = gameData.index ? 0 : 1;
            setTimeout(setUpTurn, 2500);

        } else if (gameData.roll1 === 1 || gameData.roll2 === 1) {
            failSound.play();
            setImages('sad');
            game.innerHTML += `<p>Out of bait! Switching to <strong>${gameData.players[gameData.index ? 0 : 1]}</strong></p>`;
            gameData.index = gameData.index ? 0 : 1;
            setTimeout(setUpTurn, 2000);

        } else {
            gameData.score[gameData.index] = gameData.score[gameData.index] + gameData.rollSum;
            setImages('idle');
            actionArea.innerHTML = '<button id="rollagain">Roll Again</button> or <button id="pass">Pass</button>';

            document.querySelector('#rollagain').addEventListener('click', function(){
                throwDice();
            });

            document.querySelector('#pass').addEventListener('click', function(){
                gameData.index = gameData.index ? 0 : 1;
                setUpTurn();
            });

            checkWinningCondition();
        }
    }

    function checkWinningCondition(){
        showCurrentScore();
        if (gameData.score[gameData.index] > gameData.gameEnd) {
            winSound.play();
            setImages('win');
            score.innerHTML = `<h2>${gameData.players[gameData.index]} wins with ${gameData.score[gameData.index]} fish!</h2>`;
            actionArea.innerHTML = '';
            const quit = document.querySelector('#quit');
            if (quit) quit.textContent = 'Play Again?';
        }
    }

    function showCurrentScore(){
        score.innerHTML = `<p>Score: <strong>${gameData.players[0]}: ${gameData.score[0]}</strong> and <strong>${gameData.players[1]}: ${gameData.score[1]}</strong></p>`;
        document.querySelector('#p1score').textContent = `${gameData.score[0]} fish`;
        document.querySelector('#p2score').textContent = `${gameData.score[1]} fish`;
    }

})();