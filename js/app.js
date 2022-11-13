const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissor");
const buttons = document.querySelectorAll(".btn");
const playerScoreBoard = document.querySelector(".player-score");
const computerScoreBoard = document.querySelector(".computer-score")
const infoText = document.querySelector(".info-text")
let playerScore = 0;
let computerScore = 0;

buttons.forEach(function (button) {
    /* console.log(button) */
    button.addEventListener("click", play);
})

function play(e) {
    /* console.log(e) */
   /*  console.log('playerGuess', e.target.id); */
    const playerGuess = e.target.id;
    const computerOptions = ["rock", "paper", "scissors"]
    /* console.log(computerOptions)
    console.log('=========') */

  /*   computerOptions.forEach(function (computerOption){
        console.log(computerOption)
    }) */

    const computerGuess = Math.floor(Math.random() * computerOptions.length);
    /* console.log('computerGuess', computerOptions[computerGuess]) */
    const computerGuessString = computerOptions[computerGuess]

    console.log('playerguess', playerGuess);
    console.log('computerguess', computerGuessString);
    console.log('-----');
    if (playerGuess === computerGuessString) {
        // do over
        console.log("Draw")
        infoText.textContent = `Draw!`
    }

    if (playerGuess === 'rock' && computerGuessString === 'paper') {
        // computer wins
        
        computerScore++
        infoText.textContent = `Player chose: ${playerGuess} Computer chose: ${computerGuessString}`
    }

    if (playerGuess === 'rock' && computerGuessString === 'scissors') {
         
        // player wins
        playerScore++
        infoText.textContent = infoText.textContent = `Player chose: ${playerGuess} Computer chose: ${computerGuessString}`
    }
 
    if (playerGuess === 'paper' && computerGuessString === 'rock') {
         
        //player wins
        playerScore++
        infoText.textContent = infoText.textContent = `Player chose: ${playerGuess} Computer chose: ${computerGuessString}`
    }

    if (playerGuess === 'paper' && computerGuessString === 'scissors') {
         
        // computer wins
        computerScore++
        infoText.textContent = infoText.textContent = `Player chose: ${playerGuess} Computer chose: ${computerGuessString}`
    }

    if (playerGuess === 'scissors' && computerGuessString === 'rock') {
         
        // computer wins
        computerScore++
        infoText.textContent = infoText.textContent = `Player chose: ${playerGuess} Computer chose: ${computerGuessString}`

    }

    if (playerGuess === 'scissors' && computerGuessString === 'paper') {

        // player wins
        playerScore++
        infoText.textContent = infoText.textContent = `Player chose: ${playerGuess} Computer chose: ${computerGuessString}`
        
    }
    console.log('computerscore', computerScore)
    console.log('playerscore', playerScore)
    playerScoreBoard.textContent = `Player: ${playerScore}`
    computerScoreBoard.textContent = `Computer: ${computerScore}`
}

