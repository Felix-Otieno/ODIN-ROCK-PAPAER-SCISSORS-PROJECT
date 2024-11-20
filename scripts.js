let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound(humanChoice, computerChoice) {
    const resultMessage = determineRoundWinner(humanChoice, computerChoice);

    // Update scores in the DOM
    function updateScores() {
        document.getElementById('human-score').textContent = humanScore;
        document.getElementById('computer-score').textContent = computerScore;
    }

    function displayResult(message) {
        document.getElementById('result').textContent = message;
    }

    // Check if someone won the round
    if (resultMessage.includes("You win")) {
        humanScore++;
    } else if (resultMessage.includes("You lose")) {
        computerScore++;
    }

    // Display results and update scores
    displayResult(resultMessage);
    updateScores();

    // Check if someone reached 5 points
    if (humanScore === 5) {
        displayResult("You won the game!");
    } else if (computerScore === 5) {
        displayResult("Computer won the game!");
    }
}

function determineRoundWinner(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return `It's a tie! You both chose ${humanChoice}`;
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "rock")
    ) {
        return `You win! ${humanChoice} beats ${computerChoice}`;
    } else {
        return `You lose! ${computerChoice} beats ${humanChoice}`;
    }
}

// Add event listeners to buttons
document.getElementById('rock-btn').addEventListener('click', function() {
    const computerChoice = getComputerChoice();
    playRound('rock', computerChoice);
});

document.getElementById('paper-btn').addEventListener('click', function() {
    const computerChoice = getComputerChoice();
    playRound('paper', computerChoice);
});

document.getElementById('scissors-btn').addEventListener('click', function() {
    const computerChoice = getComputerChoice();
    playRound('scissors', computerChoice);
});
