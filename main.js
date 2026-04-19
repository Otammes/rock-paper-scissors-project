console.log("Hello")



function getComputerChoice(outcome) {
    if (outcome <= 0.33)
        return("rock")
    else if (outcome <= 0.67)
        return("paper")
    else
        return("scissors")

} 
/* Picks a random number and converts it to a value */

let outcome = Math.random();
let computerChoice = getComputerChoice(outcome);
console.log(computerChoice)
/* Assigns a random variable */ 

function getHumanChoice() {
    let choice = prompt("Rock, Paper or Scissors?")
    choice = choice.toLowerCase()
    return choice
}

let humanChoice = getHumanChoice();
/* Prompts the user for their input  */


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

