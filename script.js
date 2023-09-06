function game() {
    let playerSelection;
    let computerSelection;
    let playerScore = 0;
    let computerScore = 0;

    function getComputerSelection() {
        const computerChoice = ['rock', 'paper', 'scissors']
        const choiceNumber = Math.floor(Math.random() * 3);
        return computerChoice[choiceNumber]
    }

    function playRound() {
        let playerSelection = prompt('Which do you choose?').toLowerCase();
        let computerSelection = getComputerSelection().toLowerCase();
        if (playerSelection == computerSelection) {
            alert('It is a tie!');
        }
        else if (
            (computerSelection == 'rock' && playerSelection == 'scissors') ||
            (computerSelection == 'paper' && playerSelection == 'rock') ||
            (computerSelection == 'scissors' && playerSelection == 'paper')
        ) {
            alert('Automatons have won this round!');
            computerScore++
        } else {
            alert('You win the round!');
            playerScore++
        }
        console.log(playerScore, computerScore)
        console.log(playerSelection, computerSelection)
        if (playerScore < 5 && computerScore < 5) {
            playRound();
        }
    }
    playRound();
    function declareWinner() {
        if (playerScore > computerScore) {
            alert('Mankind wins the day!');
        } else if (playerScore < computerScore) {
            alert('The students have surpassed the masters.');
        }
    }
}
game()