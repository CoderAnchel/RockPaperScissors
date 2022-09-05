

function getComputerChoice() { 
    const choices = ['rock', 'paper', 'scissors'];
    const randomChoice = Math.floor(Math.random() * 3);
    return choices[randomChoice];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        console.log(`Player: ${playerSelection} - Machine: ${computerSelection}`);

        console.log("equal");
    } else if ( (playerSelection == "paper") && (computerSelection == "rock") ) {
        console.log(`Player: ${playerSelection} - Machine: ${computerSelection}`);

        console.log("paper wind Rock !!!!!");
        console.log("PLAYER WONS!!!!")
    } else if ( (playerSelection == "scissors") && (computerSelection == "rock") ) {
        console.log(`Player: ${playerSelection} - Machine: ${computerSelection}`);

        console.log("Rock wind scissors !!!!!");
        console.log("MACHINE WONS!!!!")
    } else if ( (playerSelection == "rock") && (computerSelection == "scissors") ) {
        console.log(`Player: ${playerSelection} - Machine: ${computerSelection}`);

        console.log("Rock wind scissors !!!!!");
        console.log("PLAYER WONS!!!!")
    } else if ( (playerSelection == "paper") && (computerSelection == "scissors") ) {
        console.log(`Player: ${playerSelection} - Machine: ${computerSelection}`);

        console.log("Scissors wind paper !!!!!");
        console.log("MACHINE WONS!!!!")
    } else if ( (playerSelection == "rock") && (computerSelection == "paper") ) {
        console.log(`Player: ${playerSelection} - Machine: ${computerSelection}`);

        console.log("Rock wind paper !!!!!");
        console.log("MACHINE WONS!!!!")
    } else if ( (playerSelection == "scissors") && (computerSelection == "paper") ) {
        console.log(`Player: ${playerSelection} - Machine: ${computerSelection}`);

        console.log("Scissors wind paper !!!!!");
        console.log("PLAYER WONS!!!!")
    }
} 

const playerSelection = prompt("chose beetwen: ['rock', 'paper', 'scissors']");
const computerSelection = getComputerChoice();


function game() {
    for (let i = 0; i < 6; i++) {
        console.log(`ROUND: ${i} 🥊 ----------------------------------`)
        console.log(playRound(playerSelection, getComputerChoice()));
    }
}

game((playerSelection, computerSelection))