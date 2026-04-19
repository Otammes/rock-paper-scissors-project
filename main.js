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

outcome = Math.random();

computerChoice = getComputerChoice(outcome);
humanChoice = getHumanChoice();
playRound(humanChoice, computerChoice) /* Round 2 */

outcome = Math.random();

computerChoice = getComputerChoice(outcome);
humanChoice = getHumanChoice();
playRound(humanChoice, computerChoice) /* Round 3 */

outcome = Math.random();

computerChoice = getComputerChoice(outcome);
humanChoice = getHumanChoice();
playRound(humanChoice, computerChoice) /* Round 4 */

outcome = Math.random();

computerChoice = getComputerChoice(outcome);
humanChoice = getHumanChoice();
playRound(humanChoice, computerChoice) /* Round 5 */

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