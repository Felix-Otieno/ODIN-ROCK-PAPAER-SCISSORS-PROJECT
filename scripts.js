let humanScore = 0;
let computerScore = 0;

console.log("Hello World");

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

console.log(getComputerChoice());

function getHumanChoice() {
    let choice = prompt("Enter Rock, Paper, or Scissors:").toLowerCase();
    while (!["rock", "paper", "scissors"].includes(choice)) {
        choice = prompt("Invalid choice. Enter Rock, Paper, or Scissors:").toLowerCase();
    }
    return choice;
}

console.log(getHumanChoice());

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === computerChoice) {
        console.log(`It's a tie! You both chose ${humanChoice}`);
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "rock")
    ) {
        humanScore++;
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    } else {
        computerScore++;
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    }

    console.log(`Scores: Human - ${humanScore}, Computer - ${computerScore}`);
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
playRound(humanSelection, computerSelection);

function playGame() {
    humanScore = 0;
    computerScore = 0;

    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    if (humanScore > computerScore) {
        console.log("You win the game!");
    } else if (computerScore > humanScore) {
        console.log("You lose the game!");
    } else {
        console.log("The game is a tie!");
    }
}

playGame();

