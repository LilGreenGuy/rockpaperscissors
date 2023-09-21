const playerChoices = document.querySelectorAll('[data-choice]');
const finalColumn = document.querySelector('[data-final-column]');
const playerScoreDisplay = document.querySelector('.player');
const computerScoreDisplay = document.querySelector('.computer');
let moves = 0;
let playerScore = 0;
let computerScore = 0;
const CHOICES = [
    {
        name: 'rock',
        emoji: '🪨',
        beats: 'scissors'
    },
    {
        name: 'paper',
        emoji: '📜',
        beats: 'rock'
    },
    {
        name: 'scissors',
        emoji: '✂️',
        beats: 'paper'
    }
]

playerChoices.forEach(playerChoice => {
    playerChoice.addEventListener('click', e => {
        const choiceName = playerChoice.dataset.choice;
        const choice = CHOICES.find(choice => choice.name === choiceName);
        determineWinner(choice);

        const movesLeft = document.querySelector('.movesleft');
        moves++;
        movesLeft.innerText = `Moves left: ${20-moves}`;

        if(moves == 20) {
            gameOver(playerChoices, movesLeft);
        }
    })
})

const determineWinner = (choice) => {
    const computerChoice = getComputerChoice();
    const playerWinner = getWinner(choice, computerChoice);
    const computerWinner = getWinner(computerChoice, choice);
    addChoiceResult(computerChoice, computerWinner);
    addChoiceResult(choice, playerWinner);
    
    if(playerWinner) playerScore++, incrementScore(playerScoreDisplay);
    if(computerWinner) computerScore++, incrementScore(computerScoreDisplay);
}

const incrementScore = (scoreSpan) => {
    scoreSpan.innerText = parseInt(scoreSpan.innerText) + 1;
} 

const addChoiceResult = (choice, winner) => {
    const div = document.createElement('div');
    div.innerText = choice.emoji;
    div.classList.add('result-selection');
    if (winner) div.classList.add('winner');
    finalColumn.after(div);
}

const getWinner = (choice, opponentChoice) => {
    return choice.beats === opponentChoice.name;
}

const getComputerChoice = () => {
    const randomIndex = Math.floor(Math.random() * CHOICES.length);
    return CHOICES[randomIndex];
}

const gameOver = (playerOptions, movesLeft) => {
    const restart = document.querySelector('.choices');
    const reloadBtn = document.createElement('button');
    const results = document.createElement('h1');
    results.classList.add('endgame');
    // results.style.color = 'white';
    restart.appendChild(results)
    playerChoices.forEach(choice => {
        console.log(playerScore, computerScore)
        choice.style.display = 'none';
    })
    movesLeft.style.display = 'none';

    if (playerScore > computerScore) {
        results.style.fontSize = '3rem';
        results.innerText = 'You have won the game! Congratulations!'
    } else if(playerScore < computerScore) {   
        results.style.fontSize = '3rem';
        results.innerText = 'You have lost the game! Try again next time!'
    } else {
        results.style.fontSize = '3rem';
        results.innerText = 'It\'s a tie game! No one wins but you both lose!'
    }
    reloadBtn.classList.add('reload');
    reloadBtn.innerText = 'Restart?'
    reloadBtn.style.display = 'flex'
    restart.appendChild(reloadBtn);
    reloadBtn.addEventListener('click', e => {
        window.location.reload();
    })

}