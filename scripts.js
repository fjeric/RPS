var playerScore = 0;
var compScore = 0;
var round = 0;
var roundWinner = '';

function computerPlay() {
    var x = Math.floor(Math.random() * 3);

    if (x == 0) {
        return 'rock';
    }
    else if (x == 1) {
        return 'paper';
    }
    else {
        return 'scissor';
    }
}


function playRound(playerChoice, compChoice) {
    round++;
    if (
    (playerChoice == 'rock' && compChoice == 'scissor') ||
    (playerChoice == 'paper' && compChoice == 'rock') ||
    (playerChoice == 'scissor' && compChoice == 'paper') 
    ) {
        playerScore++;
        roundWinner = 'player';
    }

    if (
    (compChoice == 'rock' && playerChoice == 'scissor') ||
    (compChoice == 'paper' && playerChoice == 'rock') ||
    (compChoice == 'scissor' && playerChoice == 'paper')
    ) {
        compScore++;
        roundWinner = 'computer';
    }

    if (compChoice == playerChoice) 
       roundWinner = 'tie';
}


function playerClick(playerChoice) {

    const compChoice = computerPlay();
    playRound(playerChoice, compChoice);
    roundWin();
    choices(playerChoice, compChoice);
    updateScore();

    if (isGameOver() === true) {
        gameOverMessages(); 
    }
}


const buttons = document.querySelectorAll('.choices');
const container = document.querySelector('#container');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playerClick(button.id);
    });
});

const roundCount = document.getElementById('round');
const playerScoreCount = document.getElementById('playerScore');
const compScoreCount = document.getElementById('compScore');
const scoreMessage = document.getElementById('message');
const choiceMessage = document.getElementById('choiceInfo');
const restartButton = document.getElementById('restartGame');

function roundWin() {
    if (roundWinner === 'tie') {
        scoreMessage.textContent = "It's a tie!";
    }
    if (roundWinner === 'player') {
        scoreMessage.textContent = "You won the round!";
    }
    if (roundWinner === 'computer') {
        scoreMessage.textContent = "The computer won the round";
    }
}

function choices(playerChoice, compChoice) {
    if (roundWinner === 'tie') {
        choiceMessage.textContent = `You both picked ${capitalizeChoice(playerChoice)}`
    }
    if (roundWinner === 'player') {
        choiceMessage.textContent = `${capitalizeChoice(playerChoice)} beats ${capitalizeChoice(compChoice)}`
    }
    if (roundWinner === 'computer') {
        choiceMessage.textContent = `${capitalizeChoice(playerChoice)} loses to ${capitalizeChoice(compChoice)}`
    }
}

function updateScore() {
    roundCount.textContent = `Round: ${round}`
    playerScoreCount.textContent = `Player: ${playerScore}`
    compScoreCount.textContent = `Computer: ${compScore}`
}

function capitalizeChoice(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

function isGameOver() {
    if (playerScore === 5 || compScore === 5) {
        document.getElementById("scissor").disabled = true;
        document.getElementById("rock").disabled = true;
        document.getElementById("paper").disabled = true;
        return true; }
    return false; 
}


function gameOverMessages() {
    if (playerScore === 5) {
        scoreMessage.textContent = "You won 5 rounds first. You win!!";
        choiceMessage.textContent = "Congratulations!";
        restartButton.style.visibility='visible';
        resetGame();
    }

    if (compScore === 5) {
        scoreMessage.textContent = "The computer won 5 rounds first. You lose :(";
        choiceMessage.textContent = "Better luck next time";
        restartButton.style.visibility='visible';
        resetGame();
    }
}

function resetGame() {
    restartButton.addEventListener('click', () => {
        window.location.reload();
    });
}
