console.log("Hello, ready for a game of Rock, Paper, Scissors?")



function getComputerChoice(outcome) {
    if (outcome <= 0.33){
        return("rock")}
    else if (outcome <= 0.67){
        return("paper")}
    else {
        return("scissors")}

} 

/* Result of function gets placed in computerChoice variable */ 

const rockButton = document.querySelector("#rock")
const paperButton = document.querySelector("#paper")
const scissorsButton = document.querySelector("#scissors")


/* The function prompts the user for their input */
 
function playGame() {

let humanScore = 0
let computerScore = 0

function playRound(humanChoice, computerChoice) {
    
    if (humanChoice === "rock" && computerChoice === "rock" 
        || humanChoice === "paper" && computerChoice === "paper"
        || humanChoice === "scissors" && computerChoice === "scissors"
    ) {console.log("Tie")}

    else if (humanChoice === "rock" && computerChoice === "scissors"
        || humanChoice === "scissors" && computerChoice === "paper"
        || humanChoice === "paper" && computerChoice === "rock") {

        console.log("You win this round")
        ++humanScore
        }
    
    else {console.log("You lose!") 
        ++computerScore
    }           
}

/* Moved playRound function into playGame function to play 5 rounds */

let outcome = Math.random();

let computerChoice = getComputerChoice(outcome);
let humanChoice = getHumanChoice();
playRound(humanChoice, computerChoice) /* Round 1 */


if (humanScore > computerScore) {
    alert("You have won!")
    }
else if (computerScore > humanScore){
    alert("You have lost!")
}
else {alert("It's a tie")
}
}

playGame()