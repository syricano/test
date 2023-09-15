// Declaring constants & possible choices
var choices = ["rock", "paper", "scissors"];
var result = document.getElementById("result");
var playerSelection = document.getElementById("p-display");
var computerSelection = document.getElementById("c-display");
var playerScore = 0; // Initialize player score
var computerScore = 0; // Initialize computer score

/** Declare player choice */
var playerChoice;

function setPlayerChoice(choice) {
    playerChoice = choice;
    playerSelection.innerHTML = `Player chose: ${choice}`;
    
    runGame();
}

/** Declare computer choice */
function setComputerChoice() {
    let computerChoice = choices[Math.floor(Math.random() * choices.length)];
    computerSelection.innerHTML = `Computer chose: ${computerChoice}`;
    return computerChoice;
}

/** Game console */
function runGame() {
    // Setting computer choice
    var computerChoice = setComputerChoice();
    /** winning conditions */
    if (playerChoice === computerChoice) {
        result.innerHTML = "Same same";
    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        result.innerHTML = "You Win";
        playerScore++; // Increment player's score
        document.getElementById("player-score").innerHTML = playerScore; // Update player's score display
    } else {
        result.innerHTML = "Computer Wins";
        computerScore++; // Increment computer's score
        document.getElementById("computer-score").innerHTML = computerScore; // Update computer's score display
    }
}

/** running game on load */
window.onload= runGame();