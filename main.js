let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let choices = ["rock", "paper", "scissors"];
  let ind = Math.floor(Math.random() * 3);
  return choices[ind];
}

function getHumanChoice() {
  let choice = prompt("Enter your choice: Rock, Paper, or Scissors.");
  choice = choice.toLowerCase();

  if (typeof choice !== "string") {
    return null;
  }

  if (choice === "rock") {
    console.log("You chose Rock!");
    return choice;
  } else if (choice === "paper") {
    console.log("You chose Paper!");
    return choice;
  } else if (choice === "scissors") {
    console.log("You chose Scissors!");
    return choice;
  } else {
    return null;
  }
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === "rock") {
    if (computerChoice === "rock") {
      console.log("It is a tie.");
      console.log(`Score: Human: ${humanScore} -  Computer: ${computerScore}`);
    } else if (computerChoice === "paper") {
      console.log("You lose");
      computerScore++;
      console.log(`Score: Human: ${humanScore} -  Computer: ${computerScore}`);
    } else {
      console.log("You win.");
      humanScore++;
      console.log(`Score: Human: ${humanScore} -  Computer: ${computerScore}`);
    }
  } else if (humanChoice === "paper") {
    if (computerChoice === "rock") {
      console.log("You win");
      humanScore++;
      console.log(`Score: Human: ${humanScore} -  Computer: ${computerScore}`);
    } else if (computerChoice === "paper") {
      console.log("It is a tie!");
      console.log(`Score: Human: ${humanScore} -  Computer: ${computerScore}`);
    } else {
      console.log("You lose.");
      computerScore++;
      console.log(`Score: Human: ${humanScore} -  Computer: ${computerScore}`);
    }
  } else {
    if (computerChoice === "rock") {
      console.log("You lose");
      computerScore++;
      console.log(`Score: Human: ${humanScore} -  Computer: ${computerScore}`);
    } else if (computerChoice === "paper") {
      console.log("You win");
      humanScore++;
      console.log(`Score: Human: ${humanScore} -  Computer: ${computerScore}`);
    } else {
      console.log("It is a tie");
      console.log(`Score: Human: ${humanScore} -  Computer: ${computerScore}`);
    }
  }

  return null;
}

function playGame() {
  while (humanScore <= 5 && computerScore <= 5) {
    let human = getHumanChoice();
    let comp = getComputerChoice();
    playRound(human, comp);
    if (humanScore === 5) {
      console.log("You win!! Reload web page to play again");
      break;
    } else if (computerScore === 5) {
      console.log("You lose!!! Reload web page to play again");
      break;
    } else {
      console.log("Next Round!");
    }
  }
}

playGame();
