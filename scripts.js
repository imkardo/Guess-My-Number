'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
let displayNumber = document.querySelector('.number');
let displayGuess = document.querySelector('.guess');

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
}

const displayScore = function (score) {
    document.querySelector('.score').textContent = score;
}

document.querySelector('.check').addEventListener('click', function () {

    const guess = Number(displayGuess.value);

    // When there is no input
    if (!guess) {
        displayMessage('⛔ No Number!');

        // When Player Wins
    } else if (guess === secretNumber) {
        displayMessage('🎉 Correct Number !');
        document.querySelector('body').style.backgroundColor = '#60b347';
        displayNumber.style.width = '30rem';
        displayNumber.textContent = secretNumber;
        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
        // When Guess Is Wrong
    } else if (guess !== secretNumber) {
        if (score > 1) {
            displayMessage(guess > secretNumber ? '📈 Too High!' : '📉 Too Low!');
            score--;
            displayScore(score)
        } else {
            displayMessage('💥 You Lost The Game');
            displayScore(0)
        }
    }

});

document.querySelector('.again').addEventListener('click', function () {
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    displayNumber.textContent = '?';
    displayMessage('Start guessing...');
    score = 20;
    displayScore(score);
    displayGuess.value = ' ';
    document.querySelector('body').style.backgroundColor = '#222'
    displayNumber.style.width = '15rem';
})