let humanScore = 0;
let computerScore = 0;
let roundNumber = 1;
let roundWinner = "";

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
        return "Tie";
    } else if (
        (humanChoice === "rock" && computerChoice == "scissors") ||
        (humanChoice === "paper" && computerChoice == "rock") ||
        (humanChoice === "scissors" && computerChoice == "paper")) {
        console.log("You win this round!")
        humanScore += 1;
        roundNumber += 1;
        return "Human";
    } else {
        console.log("Computer wins this round!")
        computerScore += 1;
        roundNumber += 1;
        return "Computer";
    }
}

function playGame() {
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

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const humanSelection = button.id;
        const computerSelection = getComputerChoice();
        const round = document.querySelector(".roundNum");
        const score = document.querySelector(".score");
        const result = document.querySelector(".result");

        if (humanScore === 5 || computerScore === 5) {
            let gameWinner = (humanScore === 5) ? "Human" : "Computer"
            result.textContent = `Result: The ${gameWinner} won!`
        } else {
            roundWinner = playRound(humanSelection, computerSelection);
            round.textContent = `Round ${roundNumber}`
            score.textContent = `Score: Human - ${humanScore}, Computer - ${computerScore}`            
        }
    });   
});
