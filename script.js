var playerButtons = document.querySelectorAll(".player-buttons > button");

playerButtons.forEach((button) => {
  button.disabled = false;
  button.addEventListener("click", () => {
    playRound(button.id);
  });
});

function playRound(playerChoice) {
  function getComputerChoice() {
    switch (Math.floor(Math.random() * 3)) {
      case 0:
        return "rock";
      case 1:
        return "paper";
      case 2:
        return "scissors";
    }
  }

  function getResult(playerChoice, computerChoice) {
    if (playerChoice == computerChoice) {
      return "Tie";
    }
    if (playerChoice == "rock" && computerChoice == "scissors") {
      return true;
    }
    if (playerChoice == "paper" && computerChoice == "rock") {
      return true;
    }
    if (playerChoice == "scissors" && computerChoice == "paper") {
      return true;
    }
  }

  const computerChoice = getComputerChoice();

  const result = getResult(playerChoice, computerChoice);

  const resultELement = document.querySelector(".result");

  if (result == "Tie") {
    console.log(
      (resultELement.textContent = `Tie! ${playerChoice} and ${computerChoice}`)
    );
  } else if (result) {
    console.log(
      (resultELement.textContent = `You win! ${playerChoice} beats ${computerChoice}`)
    );
  } else {
    console.log(
      (resultELement.textContent = `You lose! ${computerChoice} beats ${playerChoice}`)
    );
  }
}
