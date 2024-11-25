let humanScore = 0;
let computerScore = 0;
let roundNumber = 1;
let roundWinner = "";
let gameOver = false;

function getComputerChoice() {
    let randomNumber = Math.random()
    return (randomNumber < 0.333) ? "rock"
        : (randomNumber < 0.666) ? "paper"
        : "scissors";
}

function playRound(humanChoice, computerChoice) {
    console.log("User choice: " + humanChoice);
    console.log("Computer choice: " + computerChoice);
    if (humanChoice === computerChoice) {
        console.log("It's a tie! Replay this round.");
        return "Nobody";
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

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const humanSelection = button.id;
        const computerSelection = getComputerChoice();
        const round = document.querySelector(".roundNum");
        const score = document.querySelector(".score");
        const result = document.querySelector(".result");

        if (!gameOver) {
            roundWinner = playRound(humanSelection, computerSelection);
            if (humanScore === 5 || computerScore === 5) {
                score.textContent = `Score: Human - ${humanScore}, Computer - ${computerScore}`;
                result.textContent = `Result: ${roundWinner} wins the game! GAME OVER!`;
                gameOver = true;
            } else {
                round.textContent = `Round ${roundNumber}`;
                score.textContent = `Score: Human - ${humanScore}, Computer - ${computerScore}`;
                result.textContent = `Result: ${roundWinner} wins this round!`;
            }
        }
    });   
});
