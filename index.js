let score = JSON.parse(localStorage.getItem('score'));

if (score === null) { // Check if score is null, initialize if so
    score = {
        wins: 0,
        losses: 0,
        ties: 0
    };
};

updateScoreElement();
/*document.querySelector('.js-score').
innerHTML =`Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`*/

function playGame(playerMove) {
    const computerMove = pickComputerName(); // Get the computer's move
    let result = '';

    if (playerMove === 'rock') {
        if (computerMove === 'rock') {
            result = 'Tie';
        } else if (computerMove === 'paper') {
            result = 'You lose';
        } else if (computerMove === 'scissors') {
            result = 'You win';
        }

    } else if (playerMove === 'paper') {
        if (computerMove === 'rock') {
            result = 'You win';
        } else if (computerMove === 'paper') {
            result = 'Tie';
        } else if (computerMove === 'scissors') {
            result = 'You lose';
        }

    } else if (playerMove === 'scissors') {
        if (computerMove === 'rock') {
            result = 'You lose';
        } else if (computerMove === 'paper') {
            result = 'You win';
        } else if (computerMove === 'scissors') {
            result = 'Tie';
        }
    }

    // Update score based on result
    if (result === 'You win') {
        score.wins += 1;
    } else if (result === 'You lose') {
        score.losses += 1;
    } else if (result === 'Tie') {
        score.ties += 1;
    }

    localStorage.setItem('score', JSON.stringify(score)); // Save the score in local storage

    updateScoreElement();

    document.querySelector('.js-result').innerHTML = result;

    document.querySelector('.js-moves').innerHTML = ` You <img src="./${playerMove}-emoji.png" alt="" class="move-icon">
<img src="./${computerMove}-emoji.png" alt="" class="move-icon">computer`



    //             alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${result}.
    // Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`);
}


function updateScoreElement() {
    document.querySelector('.js-score').
        innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`


}

let computerMove = '';
function pickComputerName() {
    const randomNumber = (Math.random());


    if (randomNumber >= 0 && randomNumber < 1 / 3) {
        computerMove = 'rock';
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        computerMove = 'paper';
    } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
        computerMove = 'scissors';
    }

    return computerMove;

}