console.log("Hello, ready for a game of Rock, Paper, Scissors?")



function getComputerChoice(outcome) {
    if (outcome <= 0.33){
        return("rock")}
    else if (outcome <= 0.67){
        return("paper")}
    else {
        return("scissors")}

} 
/* Takes the random number provided by Math.random() and runs it */

let outcome = Math.random();
let computerChoice = getComputerChoice(outcome);
console.log(computerChoice)
/* Result of function gets placed in computerChoice variable */ 

function getHumanChoice() {
    let choice = prompt("Rock, Paper or Scissors?")
    choice = choice.toLowerCase()
    if (choice === "rock" || choice === "paper" || choice === "scissors"){
    return choice }
    else if (choice == "") {
        alert("You haven't made a choice yet.")}
    else {
        alert("You can't use that word for this game")}
}

let humanChoice = getHumanChoice();
/* The function prompts the user for their input and stores it in humanChoice  */


let humanScore = 0
let computerScore = 0
/* Starting values of the scoreboard */ 


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

playRound(humanChoice, computerChoice)

console.log(computerScore)


function playGame() {

outcome = Math.random();
computerChoice = getComputerChoice(outcome);

humanChoice = getHumanChoice();

playRound(humanChoice, computerChoice)
}

playGame()
