function game() {
    let playerScore = 0;
    let computerScore = 0;

    function getComputerSelection() {
        const computerChoice = ['rock', 'paper', 'scissors']
        const choiceNumber = Math.floor(Math.random() * 3);
        return computerChoice[choiceNumber]
    }

    function playRound() {
        let playerSelection = prompt('Which do you choose?').toLowerCase();
        let computerSelection = getComputerSelection();
        if (playerSelection == computerSelection) {
            alert('It is a tie!');
        }
        else if (playerSelection === 'rock') {
            if (computerSelection === 'paper') {
                alert('You lose! Game over man. GAME OVER!')
                computerScore++;
            }
            else {
                alert('You win! That will teach robots to defy their creators!')
                playerScore++;
            }
        }
        else if (playerSelection === 'paper') {
            if (computerSelection === 'scissors') {
                alert('You lose! Game over man. GAME OVER!')
                computerScore++;
            }
            else {
                alert('You win! That will teach robots to defy their creators!')
                playerScore++;
            }
        }
        else if (playerSelection === 'scissors') {
            if (computerSelection === 'rock') {
                alert('You lose! Game over man. GAME OVER!')
                computerScore++;
            }
            else {
                alert('You win! That will teach robots to defy their creators!')
                playerScore++;
            }
        }
        console.log(playerScore, computerScore)
        console.log(playerSelection, computerSelection)
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