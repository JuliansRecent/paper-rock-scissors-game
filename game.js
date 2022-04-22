//make a computer function that returns paper,rock, or scissors
const myOptions = ["Rock", "Paper", "Scissors"];

function computerPlay() {
   let computerPlay = Math.random();
   if (computerPlay < 0.33) {
       computerPlay = "rock";
   } else if (computerPlay >= 0.67) {
       computerPlay = "paper"
   } else {
       computerPlay = "scissors"
   }
   return computerPlay
}
console.log(computerPlay)