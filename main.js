console.log("Hello, ready for a game of Rock, Paper, Scissors?")



function getComputerChoice(outcome) {
    if (outcome <= 0.33){
        return("rock")}
    else if (outcome <= 0.67){
        return("paper")}
    else {
        return("scissors")}

} 

let outcome = Math.random();

let computerChoice = getComputerChoice(outcome);
/* Result of function gets placed in computerChoice variable */ 


function playGame() {

let humanScore = 0
let computerScore = 0


const rockButton = document.querySelector("#rock")
const paperButton = document.querySelector("#paper")
const scissorsButton = document.querySelector("#scissors")

rockButton.addEventListener("click", () => {playRound(rockButton.id, getComputerChoice(Math.random()))})
paperButton.addEventListener("click", () => {playRound(paperButton.id, getComputerChoice(Math.random()))})
scissorsButton.addEventListener("click", () => {playRound(scissorsButton.id, getComputerChoice(Math.random()))})


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
       
    if (humanScore > computerScore) {
    alert("You have won!")
    }
else if (computerScore > humanScore){
    alert("You have lost!")
}
else {alert("It's a tie")
}
}

/* Moved playRound function into playGame function to play 5 rounds */


}


playGame()