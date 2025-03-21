var playerScore = 0;
var computerScore = 0;

var playerButtons = document.querySelectorAll(".player-buttons > button");

playerButtons.forEach((button) => {
  button.disabled = false;
  button.addEventListener("click", () => {
    playRound(button.textContent);
  });
});

function playRound(playerChoice) {
  function getComputerChoice() {
    switch (Math.floor(Math.random() * 3)) {
      case 0:
        return "✊";
      case 1:
        return "🖐";
      case 2:
        return "✌";
    }
  }

  function getResult(playerChoice, computerChoice) {
    if (playerChoice == computerChoice) {
      return "Tie";
    }
    if (playerChoice == "✊" && computerChoice == "✌") {
      return true;
    }
    if (playerChoice == "🖐" && computerChoice == "✊") {
      return true;
    }
    if (playerChoice == "✌" && computerChoice == "🖐") {
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
    resultELement.id = "result-tie";
  } else if (result) {
    playerScore += 1;
    console.log(
      (resultELement.textContent = `You win! ${playerChoice} beats ${computerChoice}`)
    );
    resultELement.id = "result-win";
  } else {
    computerScore += 1;
    console.log(
      (resultELement.textContent = `You lose! ${computerChoice} beats ${playerChoice}`)
    );
    resultELement.id = "result-lose";
  }

  document.querySelector(".player-score").textContent = playerScore;
  document.querySelector(".computer-score").textContent = computerScore;
}
