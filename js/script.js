var argMoveId, argPlayerMove, argComputerMove, computerMove, playerMove, randomNumber, playerInput;
var argButtonName, buttonRock, buttonPaper, buttonScissors;
var scorePlayer = 0, scoreComputer = 0, counter = 0;

buttonRock = document.getElementById('button-rock');
buttonRock.addEventListener('click', function(){ buttonClicked('rock', scorePlayer, scoreComputer, counter); });

buttonPaper = document.getElementById('button-paper');
buttonPaper.addEventListener('click', function(){ buttonClicked('paper', scorePlayer, scoreComputer, counter); });

buttonScissors = document.getElementById('button-scissors');
buttonScissors.addEventListener('click', function(){ buttonClicked('scissors', scorePlayer, scoreComputer, counter); });

buttonReset = document.getElementById('button-reset');
buttonReset.addEventListener('click', function(){ resetCounter(scorePlayer, scoreComputer, counter); });