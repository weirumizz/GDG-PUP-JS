document.addEventListener("DOMContentLoaded", () => {
  // ========== DOM ELEMENTS ==========
  const startButton = document.getElementById("startButton");
  const resetButton = document.getElementById("resetButton");
  const userChoiceDisplay = document.querySelector("#userChoice");
  const computerChoiceDisplay = document.querySelector("#computerChoice");
  const resultDisplay = document.querySelector("#result");
  const winsDisplay = document.getElementById("wins");
  const lossesDisplay = document.getElementById("losses");
  const tiesDisplay = document.getElementById("ties");

  // ========== GAME STATE VARIABLES ==========
  let userChoice = "";
  let wins = 0;
  let losses = 0;
  let ties = 0;
  const choices = ["rock", "paper", "scissors"];

  // ========== EVENT LISTENERS ==========
  document
    .getElementById("rock")
    .addEventListener("click", () => selectChoice("rock"));
  document
    .getElementById("paper")
    .addEventListener("click", () => selectChoice("paper"));
  document
    .getElementById("scissors")
    .addEventListener("click", () => selectChoice("scissors"));
  startButton.addEventListener("click", playGame);
  resetButton.addEventListener("click", resetGame);

  // ========== FUNCTIONS ==========
  function selectChoice(choice) {
    userChoice = choice;
    userChoiceDisplay.innerHTML = `<img src="./assets/images/icon-${choice}.png" alt="${choice}" class="choice--img"/>`;
    startButton.disabled = false;
  }

  function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  }

  function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
      return "draw";
    } else if (
      (userChoice === "rock" && computerChoice === "scissors") ||
      (userChoice === "paper" && computerChoice === "rock") ||
      (userChoice === "scissors" && computerChoice === "paper")
    ) {
      return "win";
    } else {
      return "lose";
    }
  }

  function updateScore(result) {
    if (result === "win") {
      wins++;
      winsDisplay.textContent = wins;
    } else if (result === "lose") {
      losses++;
      lossesDisplay.textContent = losses;
    } else {
      ties++;
      tiesDisplay.textContent = ties;
    }
  }

  function playGame() {
    const computerChoice = getComputerChoice();
    const result = determineWinner(userChoice, computerChoice);

    computerChoiceDisplay.innerHTML = `<img src="./assets/images/icon-${computerChoice}.png" alt="${computerChoice}" class="choice--img"/>`;

    if (result === "draw") {
      resultDisplay.textContent = "It's a Draw!";
    } else if (result === "win") {
      resultDisplay.textContent = "You Win!";
    } else {
      resultDisplay.textContent = "You Lose!";
    }

    updateScore(result);
    startButton.disabled = true;
  }

  function resetGame() {
    userChoice = "";
    wins = 0;
    losses = 0;
    ties = 0;
    winsDisplay.textContent = wins;
    lossesDisplay.textContent = losses;
    tiesDisplay.textContent = ties;
    resultDisplay.textContent = "Choose your weapon!";
    userChoiceDisplay.innerHTML =
      '<img src="./assets/images/icon-user.png" alt="user" class="choice--img">';
    computerChoiceDisplay.innerHTML =
      '<img src="./assets/images/icon-computer.png" alt="computer" class="choice--img">';
    startButton.disabled = true;
  }
});
