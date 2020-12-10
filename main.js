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

let playerSelection = playerPlay();
let computerSelection = computerPlay();

// tests:
console.log(computerPlay());
console.log(" palyer :  " + playerSelection);