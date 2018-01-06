'use strict'
const characters = document.querySelectorAll(".character");
const playerSpot = document.getElementById("player-spot");
const computerSpot = document.getElementById("computer-spot");
const startMatchBtn = document.getElementById("start-match-btn");
const playerScore = document.getElementById("player-score");
const computerScore = document.getElementById("computer-score");
let player1;

function computerSelection() {
  const choice = Math.floor(Math.random() * characters.length);
  return characters[choice];
}

function playerSelection(backgroundColor) {
  for (let i = 0; i < characters.length; i++) {
    characters[i].addEventListener("click", function(event) {
      characters.forEach(char => char.style.backgroundColor = "initial");
      characters[i].style.backgroundColor = backgroundColor;
      characters[i].style.borderRadius = "10px";
      player1 = characters[i];
    });
  }
}

playerSelection("red");

function Character(name, resultAgainstRock, resultAgainstPaper, resultAgainstScissors) {
  this.name = name;
  this.rock = resultAgainstRock;
  this.paper = resultAgainstPaper;
  this.scissors = resultAgainstScissors;
}

startMatchBtn.addEventListener("click", function(event) {
  const computerChoice = computerSelection();
  let playerChoice;
  computerSpot.src = computerChoice.src;
  playerSpot.src = player1.src;

  const win = "win",
    lose = "lose",
    tie = "tie";

  //Player result against Computer. Parameters as follows: Name of Character, result against rock, result against paper, result against scissors
  const rock = new Character("rock", tie, lose, win);
  const paper = new Character("paper", win, tie, lose);
  const scissors = new Character("scissors", lose, win, tie);

  //player1 is a global variable at this moment
  player1.id === "rock" ? playerChoice = rock :
    player1.id === "paper" ? playerChoice = paper :
    player1.id === "scissors" ? playerChoice = scissors : 0;

  const playerResult = playerChoice[computerChoice.id];

  playerResult === win ? playerScore.textContent++ :
    playerResult === tie ? 0 :
    playerResult === lose ? computerScore.textContent++ : 0;
});

//The Below source code is just the terminal version
/*
function getRandomInt(range) {
  return Math.floor(Math.random() * range);
}

//Player results against opponent
function Character(name, resultAgainstRock, resultAgainstPaper, resultAgainstScissors) {
  this.name = name;
  this.rock = resultAgainstRock;
  this.paper = resultAgainstPaper;
  this.scissors = resultAgainstScissors;
}

function startGame(playerChoice) {

  playerChoice = playerChoice.toLowerCase();

  //setting the name and results for each character
  const rock = new Character("rock", "ties", "loses", "wins");
  const paper = new Character("paper", "wins", "ties", "loses");
  const scissors = new Character("scissors", "loses", "wins", "ties");

  const characters = [rock, paper, scissors]
  const computerChoice = characters[getRandomInt(characters.length)];

  //figures out what character the player chooses
  playerChoice === "rock" ? playerChoice = rock :
    playerChoice === "paper" ? playerChoice = paper :
    playerChoice === "scissors" ? playerChoice = scissors : 0;

  const playerResult = playerChoice[computerChoice.name];

  return `Player Chooses ${playerChoice.name} and Computer Chooses ${computerChoice.name} so Player ${playerResult}.` + `\n_____________\n`
}
*/
