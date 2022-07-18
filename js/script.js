var computerMove, playerMove, randomNumber, playerInput;

function getMoveName(argMoveId) {
  console.log('wywołano funkcję getMoveName z argumentem: ' + argMoveId);
  if (argMoveId == 1) {
    return 'kamień';
  } else if (argMoveId == 2) {
    return 'papier';
  } else if (argMoveId == 3) {
    return 'nożyce';
  } else {
    printMessage('Nie znam ruchu o id ' + argMoveId + '. Zakładam, że chodziło o "kamień".');
    return 'kamień';
  }
}

function displayResult(argPlayerMove, argComputerMove) {
  console.log('wywołano funkcję displayResults z argumentami: ' + argPlayerMove + ', ' + argComputerMove);
  if (argPlayerMove == 'papier' && argComputerMove == 'kamień') {
    printMessage('Wygrywasz!');
  } else if (argPlayerMove == 'kamień' && argComputerMove == 'nożyce') {
    printMessage('Wygrywasz!');
  } else if (argPlayerMove == 'nożyce' && argComputerMove == 'papier') {
    printMessage('Wygrywasz!');
  } else if (argPlayerMove == argComputerMove) {
    printMessage('Remis');
  } else {
    printMessage('Przegrywasz :(');
  }
  printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
}

const buttonTest = document.getElementById('button-test');
const buttonRock = document.getElementById('button-rock');
const buttonPaper = document.getElementById('button-paper');
const buttonScissors = document.getElementById('button-scissors');

function buttonClicked(argButtonName) {
  clearMessages();
  console.log(argButtonName + ' został kliknięty');

const playerInput = argButtonName;
  console.log('Wpisana odpowiedź to: ' + playerInput);
  const playerMove=getMoveName (playerInput);
  // if (playerInput == '1') {
  //   playerMove = 'kamień';
  // } else if (playerInput == '2') {
  //   playerMove = 'papier';
  // } else if (playerInput == '3') {
  //   playerMove = 'nożyce';
  // } else {
  //   playerMove = 'Błędny ruch';
  //   printMessage('Błędny ruch');
  // }
  printMessage('Twój ruch: ' + playerMove);

  randomNumber = Math.floor(Math.random() * 3 + 1);
  console.log('wylosowana liczba to: ' + randomNumber);
  const computerMove=getMoveName (randomNumber)
  // if (randomNumber == '1') {
  //   computerMove = 'kamień';
  // } else if (randomNumber == '2') {
  //   computerMove = 'papier';
  // } else if (randomNumber == '3') {
  //   computerMove = 'nożyce';
  // } else {
  //   computerMove = 'nieznany ruch';
  // }
  printMessage('Mój ruch: ' + computerMove);
  displayResult(playerMove, computerMove)
}

buttonRock.addEventListener('click', function () { buttonClicked('1'); });
buttonPaper.addEventListener('click', function () { buttonClicked('2'); });
buttonScissors.addEventListener('click', function () { buttonClicked('3');
});
