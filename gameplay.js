console.log("Welcome to RPS");

//game()
function game() {
    let numRounds = 5;
    let playerSelection;
    let computerSelection
    for (let i = 0; i < numRounds; i++) {
        playerSelection = prompt("What's your move?");
        computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
    }
}

function playRound(playerSelection, computerSelection) {
    if (typeof playerSelection !== "string" ||
     typeof computerSelection !== "string") {
         return undefined;
     }
    
    let playerMove = playerSelection.toLowerCase();
    let computerMove = computerSelection.toLowerCase();
    let result;
    if (playerMove === computerMove) {
        result = "It's a Draw!";
    } else {
        result = calculateRoundResult(playerMove, computerMove);
    }
    
    return result;
}

function calculateRoundResult(playerMove, computerMove) {
    if (playerMove === "rock") {
        if (computerMove === "scissors") {
            increaseCpuTally();
            return "You Win! Rock beats Scissors";
        } else {
            increasePlayerTally();
            return "You Lose! Paper beats Rock";
        }
    } else if (playerMove === "paper") {
        if (computerMove === "scissors") {
            increaseCpuTally();
            return "You Lose! Scissors beats Paper";
        } else {
            increasePlayerTally();
            return "You Win! Paper beats Rock";
        }
    } else {
        if (computerMove === "paper") {
            increasePlayerTally();
            return "You Win! Scissors beats Rock";
        } else {
            increaseCpuTally();
            return "You Lose! Rock beats Scissors";
        }
    }
}

function increaseCpuTally() {
    let tally = document.getElementById('cpu-tally');
    incrementTally(tally);
}

function increasePlayerTally() {
    let tally = document.getElementById('player-tally');
    incrementTally(tally);
}

function incrementTally(tally) {
    let score = Number(tally.textContent);
    console.log(score);
    score++;
    tally.textContent = `${score}`;
}

function computerPlay() {
    let rps = ["Rock", "Paper", "Scissors"];
    let index = Math.floor(Math.random() * 3);
    return rps[index];
}

function checkIfGameOver() {
    let cpuScore = document.getElementById('cpu-tally');
    let playerScore = document.getElementById('player-tally');

    if (cpuScore.textContent.trim() === "5") {
        resultText.textContent = "The CPU won this game! Better luck next time";
        resetGame(cpuScore, playerScore);
    } else if (playerScore.textContent.trim() === "5") {
        resultText.textContent = "You won! Noice";
        resetGame(cpuScore, playerScore);
    }
}

function resetGame(cpuScore, playerScore) {
    cpuScore.textContent = "0";
    playerScore.textContent = "0";
}