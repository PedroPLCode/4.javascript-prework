var argMoveId, argPlayerMove, argComputerMove, computerMove, playerMove, randomNumber, playerInput;
var argButtonName, buttonTest, buttonRock, buttonPaper, buttonScissors;

buttonRock = document.getElementById('button-rock');
buttonRock.addEventListener('click', function(){ buttonClicked('kamień'); });

buttonPaper = document.getElementById('button-paper');
buttonPaper.addEventListener('click', function(){ buttonClicked('papier'); });

buttonScissors = document.getElementById('button-scissors');
buttonScissors.addEventListener('click', function(){ buttonClicked('nożyce'); });

