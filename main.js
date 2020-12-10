/**
 * Your game is going to play against the computer, so begin with a function called computerPlay 
 * that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. We’ll use this function in 
 * the game to make the computer’s play.
 */
const gameChoices = ['Rock', 'Paper', 'Scissors'];

function computerPlay() {
    let randomNumber = Math.floor(Math.random() * gameChoices.length);
    return gameChoices[randomNumber];
}

/**
 * 
 * Write a function that plays a single round of Rock Paper Scissors. The function should take two 
 * parameters - the playerSelection and computerSelection - and then return a string that declares 
 * the winner of the round like so: "You Lose! Paper beats Rock"
 */

// function tha reads the choice of the player and return it .
function playerPlay() {
    let playerChoice;
    let heChooses = false;
    // reading the player choice until he enter a valisd number .
    while (!heChooses) {
        let playerInput = prompt("Please enter a move\n[ 1 for : Rock .\n 2 for : Paper.\n 3 for : Scissors .]");
        switch (playerInput) {
            case '1':
                playerChoice = 'Rock';
                heChooses = true;
                break;
            case '2':
                playerChoice = 'Paper';
                heChooses = true;
                break;
            case '3':
                playerChoice = 'Scissors';
                heChooses = true;
                break;
            default:
                alert(" Wrong move ! try again ");
        }
    }
    return playerChoice;
}


let scorePlayer = 0; // to save the score of the player
let scoreComputer = 0; // to save the score of the computer 

// build function which decide and return a string that declares  the winner of the round 

function playSingleRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    let whoWin;
    if (computerSelection === 'rock') {
        if (playerSelection === 'paper') {
            whoWin = 'You Win! Paper beats Rock';
            scorePlayer++;
        } else if (playerSelection === 'scissors') {
            whoWin = 'You Lose! Rock beats Scissors';
            scoreComputer++;
        } else { whoWin = ' Rock and Rock! No one wins' }
    } else if (computerSelection === 'paper') {
        if (playerSelection === 'rock') {
            whoWin = 'You Lose!  Paper beats Rock ';
            scoreComputer++;
        } else if (playerSelection === 'paper') { whoWin = 'Paper and Paper ! no one wins' } else {
            whoWin = 'You Win! Scissors beats Paper';
            scorePlayer++;
        }
    } else {
        if (playerSelection === 'rock') {
            whoWin = 'You Win! ROCK beats Scissors';
            scorePlayer++;
        } else if (playerSelection === 'paper') {
            whoWin = 'You Lose!  Scissors beats Paper';
            scoreComputer++;
        } else { whoWin = 'Scissors and Scissors! no one wins' }
    }
    return whoWin;
}

/**
 * Write a NEW function called game(). Use the previous function inside of this one to play until one 
 * of them reachs the  score = 5 . x rounds .
 *  keeps score and reports a winner or loser at the end.
 */

function game() {
    do {

        let playerSelection = playerPlay();
        let computerSelection = computerPlay();
        console.log("computer : " + computerSelection);
        console.log(" palyer :  " + playerSelection);
        let result = playSingleRound(playerSelection, computerSelection);
        console.log(` ${result}  The score [ player : ${scorePlayer} | Computer : ${scoreComputer} ] `);
    } while ((scoreComputer < 5) && (scorePlayer < 5))
    console.log("Game Over");
    if (scoreComputer == 5) { console.log(" YAAAA3 Computer Wins this time!!! :("); } else {
        console.log("WOOOHOO YOU Win the game !!! :)");
    }

}

// the main:
game();