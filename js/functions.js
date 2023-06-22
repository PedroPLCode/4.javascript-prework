function printMessage(msg) {
	var div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages() {
	document.getElementById('messages').innerHTML = '';
}

/**
 * Gets move id and retuns move name as a string.
 */
function getMoveName(argMoveId) {
  console.log('wywołano funkcję getMoveName z argumentem: ' + argMoveId);
  if (argMoveId == 1) {
    return 'rock';
  } else if (argMoveId == 2) {
    return 'paper';
  } else if (argMoveId == 3) {
    return 'scissors';
  } else {
    printMessage('Nie znam ruchu o id ' + argMoveId + '. Zakładam, że chodziło o "kamień".');
    return 'rock';
  }
}

/**
 * Makes decision about result of the game and displays on the screen.
 */  
function displayResult(argPlayerMove, argComputerMove, argScorePlayer, argScoreComputer, argCounter) {
  console.log('wywołano funkcję displayResults z argumentami: ' + argPlayerMove + ', ' + argComputerMove);
  if (argPlayerMove == 'paper' && argComputerMove == 'rock') {
      printMessage('YOU WON!');
      scorePlayer++;
      counter++;
  } else if (argPlayerMove == 'rock' && argComputerMove == 'scissors') {
    printMessage('YOU WON!');
      scorePlayer++;
      counter++;
  } else if (argPlayerMove == 'scissors' && argComputerMove == 'paper') {
    printMessage('YOU WON!');
       scorePlayer++;
      counter++;
  } else if (argPlayerMove == argComputerMove) {
    printMessage('REMIS');
      counter++;
  } else {
      printMessage('YOU LOSE');
      scoreComputer++;
      counter++;
  }
  printMessage('ai had ' + argComputerMove + ', human had ' + argPlayerMove);
  printMessage('round: ' + counter);
  printMessage('scoreboard:')
  printMessage('human: ' + scorePlayer + ' / computer: ' + scoreComputer);
  printMessage('play again!');
}

/**
 * Reaction to reset button clicked by user. Clear scores and round counter.
 */
function resetCounter(argScorePlayer, argScoreComputer, argCounter) {
  console.log('reset klikniety');
  scorePlayer = 0;
  scoreComputer = 0;
  counter = 0;
  console.log('counter ' + counter + ' player ' + scorePlayer + ' comp ' + scoreComputer);
  clearMessages();
  printMessage('reset')
  printMessage('counter clear')
  printMessage('scoreboard clear')
  }

/**
 * Reaction to button clicked by user.
 */
function buttonClicked(argButtonName, argScorePlayer, argScoreComputer, argCounter) {
  clearMessages();
  console.log(argButtonName + ' został kliknięty');
  playerMove = argButtonName;
  console.log('wybór ruchu gracza to: ' + playerInput);
  console.log('ruch gracza to: ' + playerMove);
  randomNumber = Math.floor(Math.random() * 3 + 1);
  console.log('wylosowana liczba to: ' + randomNumber);
  computerMove = getMoveName(randomNumber);
  console.log('ruch komputera to: ' + computerMove);
  displayResult(playerMove, computerMove, argScorePlayer, argScoreComputer, argCounter);
}