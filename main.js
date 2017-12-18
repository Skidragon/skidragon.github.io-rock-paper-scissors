const characters = document.getElementsByClassName("character-selection");
const playerSpot = document.getElementById("player-spot");
const computerSpot = document.getElementById("computer-spot");
const startMatchBtn = document.getElementById("start-match-btn")



function computerChoice() {
  const choice = Math.floor(Math.random() * characters.length);
  computerSpot.src = characters[choice].src;
}

for (let i = 0; i < characters.length; i++) {

  characters[i].addEventListener("click", function(event) {
    playerSpot.src = characters[i].src;
  });
}
startMatchBtn.addEventListener("click", function(event) {
  computerChoice();
});
