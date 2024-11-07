function getComputerChoice() {
    let randomNumber = Math.random()
    return (randomNumber < 0.333) ? "rock"
        : (randomNumber < 0.666) ? "paper"
        : "scissors";
}

console.log(getComputerChoice());

function getHumanChoice(choicePrompt = "What is your choice?") {
    let humanChoice = prompt(choicePrompt);
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === "rock" || humanChoice === "paper" || humanChoice === "scissors") {
        return humanChoice;
    } else {
        return "Invalid choice, try again.";
    }
}

console.log(getHumanChoice());