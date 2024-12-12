const rockButton = document.querySelector("#rock-button");
const paperButton = document.querySelector("#paper-button");
const scissorsButton = document.querySelector("#scissors-button");
const message = document.querySelector("#message");
const playerScore = document.querySelector("#player-score");
const compScore = document.querySelector("#computer-score");
const playAgainButton = document.querySelector("#btn-again");
let humanChoice;
let computerChoice;
let textMessage;
let humanScore = 0;
let computerScore = 0;

playAgainButton.disabled = true;

// GUI Functions ---------------------------------------------
function sendMessage(content) {
  message.textContent = `${content}`;
}

// Game Functions --------------------------------------------

function playRound(humanChoice, computerChoice) {
  if (humanChoice === "rock") {
    if (computerChoice === "rock") {
    } else if (computerChoice === "paper") {
      computerScore++;
    } else {
      humanScore++;
    }
  } else if (humanChoice === "paper") {
    if (computerChoice === "rock") {
      humanScore++;
    } else if (computerChoice === "paper") {
    } else {
      computerScore++;
    }
  } else {
    if (computerChoice === "rock") {
      computerScore++;
    } else if (computerChoice === "paper") {
      humanScore++;
    } else {
    }
  }
}

function checkGame() {
  if (humanScore === 5) {
    textMessage = `Computer chose ${computerChoice}.\nYou win!! Press Play Again to start another game`;
    sendMessage(textMessage);
    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorsButton.disabled = true;
  } else if (computerScore === 5) {
    textMessage = `Computer chose ${computerChoice}.\nYou lose!!! Press Play Again to start another game`;
    sendMessage(textMessage);
    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorsButton.disabled = true;
  } else {
    textMessage = `Computer chose ${computerChoice}.\nNext Round`;
    playAgainButton.disabled = false;
    sendMessage(textMessage);
  }
}

function getComputerChoice() {
  let choices = ["rock", "paper", "scissors"];
  let ind = Math.floor(Math.random() * 3);
  return choices[ind];
}

// Play Functions -----------------------------

rockButton.addEventListener("click", function (e) {
  humanChoice = "rock";
  computerChoice = getComputerChoice();
  playRound(humanChoice, computerChoice);
  playerScore.innerHTML = `${humanScore}`;
  compScore.innerHTML = `${computerScore}`;

  checkGame();
});

paperButton.addEventListener("click", function (e) {
  humanChoice = "paper";
  computerChoice = getComputerChoice();
  playRound(humanChoice, computerChoice);
  playerScore.innerHTML = `${humanScore}`;
  compScore.innerHTML = `${computerScore}`;

  checkGame();
});

scissorsButton.addEventListener("click", function (e) {
  humanChoice = "scissors";
  computerChoice = getComputerChoice();
  playRound(humanChoice, computerChoice);
  playerScore.innerHTML = `${humanScore}`;
  compScore.innerHTML = `${computerScore}`;

  checkGame();
});

playAgainButton.addEventListener("click", function (e) {
  rockButton.disabled = false;
  paperButton.disabled = false;
  scissorsButton.disabled = false;
  humanScore = 0;
  computerScore = 0;
  playerScore.innerHTML = `${humanScore}`;
  compScore.innerHTML = `${computerScore}`;
  sendMessage("");
  playAgainButton.disabled = true;
});
