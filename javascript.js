function getComputerChoice() {
    let randomNumber = Math.random()
    return (randomNumber < 0.333) ? "rock"
        : (randomNumber < 0.666) ? "paper"
        : "scissors";
}

console.log(getComputerChoice());