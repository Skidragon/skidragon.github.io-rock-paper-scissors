
function computerPlay() {
  const choice = Math.floor(Math.random() * (3-0)+0);
  const characters = ["rock","paper","scissors"];
  return characters[choice];
}
