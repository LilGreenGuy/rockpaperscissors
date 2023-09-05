//Use buttons to take player input
const playerChoice = prompt('Which do you choose?');
//Convert to lowercase!
const playerSelection = playerChoice.toLowerCase();
//generate computer answer!
const computerChoice = ['rock', 'paper', 'scissors']
const choiceNumber = Math.floor(Math.random() * 3);
const computerSelection = computerChoice[choiceNumber];
console.log(computerSelection)
//check player answer versus computer answer !
const playGame = document.getElementById("options")

playGame.addEventListener("click", playRound());

function playRound() {
    const result = document.querySelector('.result');
    if (playerSelection == computerSelection) {
        result.textContent = 'It\'s a tie';
    }
    else if (playerSelection == 'rock') {
        if (computerSelection == 'paper') {
            result.textContent = 'You lose the round!';
        } else  {
            result.textContent = 'You win the round!';
        }
    } 
    else if (playerSelection == 'paper') {
    if (computerSelection == 'scissors') {
        result.textContent = 'You lose the round!';
    } else {
        result.textContent = 'You win the round!';
    }
}
    else if (playerSelection == 'scissors') {
    if (computerSelection == 'rock') {
        result.textContent = 'You lose the round!';
    } else {
        result.textContent = 'You win the round!';
    }
}
}