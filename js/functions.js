function printMessage(msg) {
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages() {
	document.getElementById('messages').innerHTML = '';
}

/**
 * Draw random computer move and retuns move name as a string.
 */
function getCompMove() {
  let randomNumber = Math.floor(Math.random() * 3 + 1);
  if (randomNumber == 1) {
    return 'rock';
  } else if (randomNumber == 2) {
    return 'paper';
  } else {
    return 'scissors';
  }
}

/**
 * Makes decision about result of the game and displays on the screen.
 */  
function playGame(playerMove) {
  let computerMove = getCompMove();
  clearMessages();
  if (playerMove == 'paper' && computerMove == 'rock') {
    printMessage('YOU WON!');
    scorePlayer++;
  } else if (playerMove == 'rock' && computerMove == 'scissors') {
    printMessage('YOU WON!');
    scorePlayer++;
  } else if (playerMove == 'scissors' && computerMove == 'paper') {
    printMessage('YOU WON!');
    scorePlayer++;
  } else if (playerMove == computerMove) {
    printMessage('REMIS');
  } else {
    printMessage('YOU LOSE');
    scoreComputer++;
  }
  counter++;
  printMessage('comp had ' + computerMove + ', you had ' + playerMove);
  printMessage('round: ' + counter);
  printMessage('scoreboard:')
  printMessage('human: ' + scorePlayer + ' / computer: ' + scoreComputer);
  printMessage('play again!');
}

/**
 * Reaction to reset button clicked by user. Clear scores and round counter.
 */
function resetCounter() {
  scorePlayer = 0;
  scoreComputer = 0;
  counter = 0;
  clearMessages();
  printMessage('reset');
  printMessage('counter clear');
  printMessage('scoreboard clear');
  }

/**
 * Reaction to button clicked by user.
 */
function buttonClicked(playerMove) {
  if (playerMove == 'reset') {
    resetCounter();
  } else {
    playGame(playerMove);
  }
}