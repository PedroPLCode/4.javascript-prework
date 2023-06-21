var argMoveId, argPlayerMove, argComputerMove, computerMove, playerMove, randomNumber, playerInput;
var argButtonName, buttonRock, buttonPaper, buttonScissors;
var scorePlayer, scoreComputer, counter;

buttonRock = document.getElementById('button-rock');
buttonRock.addEventListener('click', function(){ buttonClicked('kamień'); });

buttonPaper = document.getElementById('button-paper');
buttonPaper.addEventListener('click', function(){ buttonClicked('papier'); });

buttonScissors = document.getElementById('button-scissors');
buttonScissors.addEventListener('click', function(){ buttonClicked('nożyce'); });

buttonReset = document.getElementById('button-reset');
buttonReset.addEventListener('click', function(){ resetCounter(scorePlayer, scoreComputer, counter); });

