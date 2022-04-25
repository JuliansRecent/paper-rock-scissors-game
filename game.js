//make a computer function that returns paper,rock, or scissors

function computerPlay() {
   let computerPlay = Math.random();
   if (computerPlay < 0.33) {
       computerSelection = 'Rock';
   } else if (computerPlay <= 0.67) {
       computerSelection = 'Paper'
   } else {
        computerSelection = 'Scissors'
   }
   return computerSelection;
}

//write a function that plays a single round of Rock Paper Scissors. The function 
//should take parameters, playerSelection and computerSelection. Then return a string 
//that declares the winner of the round.
function playRound(playerSelection, computerSelection) {
    if (playerSelection == 'rock' && computerSelection == 'paper') {
        return('You lose, paper beats rocks!');
    } else if (playerSelection == 'paper' && computerSelection == 'scisssors') {
        return('You lose, scissors beats paper!')
    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        return('You lose, rock beats paper!')
    } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        return('You win, rock beats scissors!') 
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        return('You win, paper beats rock!')
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        return('You win, scissors beats paper!')
    } else {
        return('Its a tie');
    }
}
//create player's and computer's score starting from 0 and increment their scores 
//accordingly

let playersScore = 0;
let computersScore = 0;



//create a fuction called game and call the playRound function inside of it to play a 
//5 round game that keeps score and reports a winner of loser at the end.
function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Rock, Paper, or Scissors?");
        const computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
        console.log("Your score = " + playersScore);
        console.log("Computer's score = " + computersScore)
    }
}

