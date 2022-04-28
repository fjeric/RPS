const compChoice = computerPlay();

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

function playerSelection() {
    var choice = prompt('Enter player choice');
    return choice.toLowerCase();
}

function playRound(playerChoice, compChoice) {
    console.log(playerChoice);
    if (playerChoice == 'rock' && compChoice == 'scissor')
       return 'You win! Rock beats Scissor';
    if (playerChoice == 'paper' && compChoice == 'rock')
        return 'You win! Paper beats Rock';
    if (playerChoice == 'scissor' && compChoice == 'paper')
        return 'You win! Scissor beats Paper';

    if (compChoice == 'rock' && playerChoice == 'scissor')
       return 'You lose! Rock beats Scissor';
    if (compChoice == 'paper' && playerChoice == 'rock')
        return 'You lose! Paper beats Rock';
    if (compChoice == 'scissor' && playerChoice == 'paper')
        return 'You lose! Scissor beats Paper';

    if (compChoice == playerChoice) 
       return "It's a tie! You both picked " + playerChoice;
}

function game() {
    var playerWins = 0;
    var compWins = 0;
    var ties = 0;
    for (let i = 0; i < 5; i++) {
        var playerChoice = playerSelection();
        var compChoice = computerPlay();
        var roundWinner = playRound(playerChoice, compChoice);

        if (roundWinner.includes('win')) {
            playerWins = playerWins + 1;
        }
        if (roundWinner.includes('lose')) {
            compWins = compWins + 1;
        }
        if (roundWinner.includes('tie')) {
            ties = ties + 1;
        }

        console.log(roundWinner);
    }
    console.log('Player wins: ' +playerWins);
    console.log('Computer Wins: ' +compWins);
    console.log('Ties: ' +ties);

    if (playerWins == compWins) {
        console.log("Player and Comp have the same number of wins. It's a tie!");
    }
    if (playerWins > compWins) {
        console.log('Congratulations, you win!')
    }
    else {
        console.log('Computer wins :(');
    }
}


