let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let randomNumber = Math.random()
    return (randomNumber < 0.333) ? "rock"
        : (randomNumber < 0.666) ? "paper"
        : "scissors";
}

function getHumanChoice() {
    let humanChoice = prompt("What is your choice?");
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === "rock" || humanChoice === "paper" || humanChoice === "scissors") {
        return humanChoice;
    } else {
        console.log("Invalid choice, try again.");
        return "";
    }
}

function playRound(humanChoice, computerChoice) {
    console.log("User choice: " + humanChoice);
    console.log("Computer choice: " + computerChoice);
    if (humanChoice === computerChoice) {
        console.log("It's a tie! Replay this round.");
    } else if (
        (humanChoice === "rock" && computerChoice == "scissors") ||
        (humanChoice === "paper" && computerChoice == "rock") ||
        (humanChoice === "scissors" && computerChoice == "paper")) {
        console.log("You win this round!")
        humanScore += 1;
    } else {
        console.log("Computer wins this round!")
        computerScore += 1;
    }
    console.log(humanScore + computerScore);
    return (humanScore + computerScore);
}

function playGame() {
    let roundNumber = 0;
    while (roundNumber < 5) {
        let computerSelection = getComputerChoice();
        let humanSelection = "";
        while (humanSelection === "") {
            humanSelection = getHumanChoice();
        }
        console.log(`Round ${(roundNumber + 1)}!`);
        playRound(humanSelection, computerSelection);
        roundNumber = humanScore + computerScore;
    }
    if (humanScore > computerScore) {
        console.log(`You won the game with a score of ${humanScore} to ${computerScore}!`);
    } else {
        console.log(`The computer won the game with a score of ${computerScore} to ${humanScore}!`);
    }
    return;
}

playGame();