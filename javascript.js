let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let randomNumber = Math.random()
    return (randomNumber < 0.333) ? "rock"
        : (randomNumber < 0.666) ? "paper"
        : "scissors";
}

function getHumanChoice(choicePrompt = "What is your choice?") {
    let humanChoice = prompt(choicePrompt);
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === "rock" || humanChoice === "paper" || humanChoice === "scissors") {
        return humanChoice;
    } else {
        return "Invalid choice, try again.";
    }
}

function playRound(humanChoice, computerChoice) {
    console.log(humanChoice);
    console.log(computerChoice);
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

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);