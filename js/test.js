var argButtonName, buttonTest, buttonRock, buttonPaper, buttonScissors;

/**
 * Describe this function...
 */
function buttonClicked(argButtonName) {
    clearMessages();
    console.log(argButtonName + ' został kliknięty');
}

buttonTest = document.getElementById('button-test');
buttonTest.addEventListener('click', function(){ buttonClicked('Guzik TEST'); });

buttonRock = document.getElementById('button-rock');
buttonRock.addEventListener('click', function(){ buttonClicked('Guzik KAMIEŃ'); });

buttonPaper = document.getElementById('button-paper');
buttonPaper.addEventListener('click', function(){ buttonClicked('Guzik PAPIER'); });

buttonScissors = document.getElementById('button-scissors');
buttonScissors.addEventListener('click', function(){ buttonClicked('Guzik NOŻYCE'); });