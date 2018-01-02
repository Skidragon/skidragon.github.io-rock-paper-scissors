const characters = document.querySelectorAll(".character-selection");
const playerSpot = document.getElementById("player-spot");
const computerSpot = document.getElementById("computer-spot");
const startMatchBtn = document.getElementById("start-match-btn")
console.log(characters);

let player1 = "";

function computerSelection() {
  const choice = Math.floor(Math.random() * characters.length);
  return characters[choice];
}

//make a strength and weakness function of character

function playerSelection(backgroundColor) {
for (let i = 0; i < characters.length; i++) {
  characters[i].addEventListener("click", function(event) {
    characters.forEach(char=> char.style.backgroundColor = "initial");
    characters[i].style.backgroundColor = backgroundColor;
    characters[i].style.borderRadius = "10px";
    player1 = characters[i];
  });
}
}
playerSelection("red");

function winOrLose(playerChoice, computerChoice) {

  for(let i = 0; i < characters.length; i++) {
  }
}
startMatchBtn.addEventListener("click", function(event) {
  computerSpot.src = computerSelection().src;
  playerSpot.src = player1.src;
});
