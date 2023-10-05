function printMessage(msg) {
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages() {
	document.getElementById('messages').innerHTML = '';
}

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

function resetCounter() {
  scorePlayer = 0;
  scoreComputer = 0;
  counter = 0;
  clearMessages();
  printMessage('reset');
  printMessage('counter clear');
  printMessage('scoreboard clear');
  }

function buttonClicked(playerMove) {
  if (playerMove == 'reset') {
    resetCounter();
  } else {
    playGame(playerMove);
  }
}