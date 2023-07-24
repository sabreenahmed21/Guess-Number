'use strict';
// document.querySelector('.message').textContent = 'Correct Number!';
// document.querySelector('.score').textContent = 10;
// document.querySelector('.guess').value = 10;
// document.querySelector('.number').textContent = 10;

let secretNumber = Math.trunc(Math.random() *20) + 1;
let score = 10;
let highscore = 0;
let displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
}
document.querySelector('.chechk').addEventListener('click', function() {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    document.querySelector('.message').textContent = 'No Number!';
  } else if (guess === secretNumber) {
    displayMessage("Correct Number!");
    document.querySelector('body').style.backgroundColor =' #60b347';
    document.querySelector('.number').textContent = secretNumber;
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if(guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'too high': 'too low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('you lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
});
document.querySelector('.again').addEventListener('click', function() {
  secretNumber = Math.trunc(Math.random() *20) + 1;
  score = 10;
  displayMessage('Start Guessing......');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor =' #222';
});






















