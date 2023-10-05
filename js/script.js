const buttonScissors = document.getElementById('button-scissors'),
  buttonPaper = document.getElementById('button-paper'),
  buttonRock = document.getElementById('button-rock'),
  buttonReset = document.getElementById('button-reset');

let scorePlayer = 0, scoreComputer = 0, counter = 0;

buttonRock.addEventListener('click', function(){ buttonClicked('rock'); });
buttonPaper.addEventListener('click', function(){ buttonClicked('paper'); });
buttonScissors.addEventListener('click', function(){ buttonClicked('scissors'); });
buttonReset.addEventListener('click', function(){ buttonClicked('reset'); });