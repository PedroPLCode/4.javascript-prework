function printMessage(msg){
	var div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}

/**
 * Describe this function...
 */
function getMoveName(argMoveId) {
    console.log('wywołano funkcję getMoveName z argumentem: ' + argMoveId);
    if (argMoveId == 1) {
      return 'kamień';
    } 
    else if (argMoveId == 2) {
      return 'papier';
    }
    else if (argMoveId == 3) {
      return 'nożyce';
    }
    else {
      printMessage('Nie znam ruchu o id ' + argMoveId + '. Zakładam, że chodziło o "kamień".');
      return 'kamień';
    }
  }
  
  function displayResult(argPlayerMove, argComputerMove, scorePlayer, scoreComputer, counter) {
      console.log('wywołano funkcję displayResults z argumentami: ' + argPlayerMove + ', ' + argComputerMove);
      if (argPlayerMove == 'papier' && argComputerMove == 'kamień') {
          printMessage('Wygrywasz!');
          scorePlayer = scorePlayer +1;
          counter = counter +1;
      }
      else if (argPlayerMove == 'kamień' && argComputerMove == 'nożyce') {
          printMessage('Wygrywasz!');
          scorePlayer = scorePlayer +1;
          counter = counter +1;
      }
      else if (argPlayerMove == 'nożyce' && argComputerMove == 'papier') {
          printMessage('Wygrywasz!');
          scorePlayer = scorePlayer +1;
          counter = counter +1;
      }
      else if (argPlayerMove == argComputerMove) {
          printMessage('Mamy remis.');
          counter = counter +1;
      }
      else {
          printMessage('Przegrywasz.');
          scoreComputer = scoreComputer +1;
          counter = counter +1;
      }
      printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
      printMessage('Round: ' + counter);
      printMessage('Scoreboard:')
      printMessage('Human: ' + scorePlayer + ' / Computer: ' + scoreComputer);
      printMessage('Try again!')
  }

  function resetCounter(scorePlayer, scoreComputer, counter) {
    scorePlayer = 0;
    scoreComputer = 0;
    counter = 0;
  }

  function displayCounter(scorePlayer, scoreComputer, counter) {
    scorePlayer = 0;
    scoreComputer = 0;
    counter = 0;
  }

/**
 * Describe this function...
 */
function buttonClicked(argButtonName) {
    clearMessages();
    console.log(argButtonName + ' został kliknięty');

    playerMove = argButtonName;
    console.log('wybór ruchu gracza to: ' + playerInput);
    console.log('ruch gracza to: ' + playerMove);
    randomNumber = Math.floor(Math.random() * 3 + 1);
    console.log('wylosowana liczba to: ' + randomNumber);
    computerMove = getMoveName(randomNumber);
    console.log('ruch komputera to: ' + computerMove);
    displayResult(playerMove, computerMove);
}