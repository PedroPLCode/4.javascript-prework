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
  
  
  function displayResult(argPlayerMove, argComputerMove, argScorePlayer, argScoreComputer, argCounter) {
      console.log('wywołano funkcję displayResults z argumentami: ' + argPlayerMove + ', ' + argComputerMove);
      if (argPlayerMove == 'papier' && argComputerMove == 'kamień') {
          printMessage('Wygrywasz!');
          scorePlayer++;
          counter++;
      }
      else if (argPlayerMove == 'kamień' && argComputerMove == 'nożyce') {
          printMessage('Wygrywasz!');
          scorePlayer++;
          counter++;
      }
      else if (argPlayerMove == 'nożyce' && argComputerMove == 'papier') {
          printMessage('Wygrywasz!');
          scorePlayer++;
          counter++;
      }
      else if (argPlayerMove == argComputerMove) {
          printMessage('Mamy remis.');
          counter++;
      }
      else {
          printMessage('Przegrywasz.');
          scoreComputer++;
          counter++;
      }
      printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
      printMessage('Round: ' + argCounter);
      printMessage('Scoreboard:')
      printMessage('Human: ' + argScorePlayer + ' / Computer: ' + argScoreComputer);
      printMessage('Play again!')
      //return counter, scorePlayer, scoreComputer;
  }

  function resetCounter(argScorePlayer, argScoreComputer, argCounter) {
    console.log('reset klikniety');
    scorePlayer = 0;
    scoreComputer = 0;
    counter = 0;
    console.log('counter' + counter + ' player ' + scorePlayer + ' comp ' + scoreComputer);
    clearMessages();
    //displayResult(playerMove, computerMove, argScorePlayer, argScoreComputer, argCounter);
  }

/**
 * Describe this function...
 */
function buttonClicked(argButtonName, argScorePlayer, argScoreComputer, argCounter) {
    clearMessages();
    console.log(argButtonName + ' został kliknięty');

    // resetCounter(scorePlayer, scoreComputer, counter);

    playerMove = argButtonName;
    console.log('wybór ruchu gracza to: ' + playerInput);
    console.log('ruch gracza to: ' + playerMove);
    randomNumber = Math.floor(Math.random() * 3 + 1);
    console.log('wylosowana liczba to: ' + randomNumber);
    computerMove = getMoveName(randomNumber);
    console.log('ruch komputera to: ' + computerMove);
    displayResult(playerMove, computerMove, argScorePlayer, argScoreComputer, argCounter);
}