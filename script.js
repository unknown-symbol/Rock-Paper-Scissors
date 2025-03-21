function playGame(times = 5) {
  var computerScore = 0;
  var humanScore = 0;

  function playRound() {
    var computerChoice;
    var humanChoice;

    function getResult(humanChoice, computerChoice) {
      if (humanChoice == computerChoice) {
        return "Tie";
      }
      if (humanChoice == "Rock" && computerChoice == "Scissors") {
        return true;
      }
      if (humanChoice == "Paper" && computerChoice == "Rock") {
        return true;
      }
      if (humanChoice == "Scissors" && computerChoice == "Paper") {
        return true;
      }
    }

    function getComputerChoice() {
      switch (Math.floor(Math.random() * 3)) {
        case 0:
          return "Rock";
        case 1:
          return "Paper";
        case 2:
          return "Scissors";
      }
    }

    function getHumanChoice() {
      switch (prompt("Choose: Rock (0); Paper (1); Scissors (2)")) {
        case "0":
          return "Rock";
        case "1":
          return "Paper";
        case "2":
          return "Scissors";
      }
    }

    computerChoice = getComputerChoice() || false;
    humanChoice = getHumanChoice() || computerChoice;

    const result = getResult(humanChoice, computerChoice);

    if (result == "Tie") {
      console.log(`Tie! ${humanChoice} and ${computerChoice}`);
    } else if (result) {
      humanScore += 1;
      console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    } else {
      computerScore += 1;
      console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    }
  }

  for (let i = 0; i < times; i++) {
    playRound();
  }

  if (humanScore > computerScore) {
    console.log("You win the game!!1");
  } else if (humanScore < computerScore) {
    console.log("The computer wins the game!");
  } else console.log("It's a tie!");

  console.log(`Score (Human vs Computer) ${humanScore} : ${computerScore}`);
  console.log("Reload the page to play again!");

  return;
}
playGame();
