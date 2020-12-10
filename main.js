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


// tests:
console.log(computerPlay());