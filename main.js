console.log("Hello")



function getComputerChoice(outcome) {
    if (outcome <= 0.33)
        return("Rock")
    else if (outcome >= 0.34 && outcome <= 0.67)
        return("Paper")
    else
        return("Scissors")

} 
/* Picks a random number and converts it to a value */

let outcome = Math.random();
let computerChoice = getComputerChoice();
console.log(getComputerChoice(outcome))


function getHumanChoice() {
    let choice = prompt("Rock, Paper or Scissors?")
    return choice
}

let humanChoice = getHumanChoice();
console.log(getHumanChoice())
/* Prompts the user their input  */


const humanScore = 0
const computerScore = 0
/* Starting values of the scoreboard */ 




function playRound(humanChoice, computerChoice) {
    humanChoice === computerChoice
        
}


humanChoice = humanChoice.toLowerCase();

const humanSelection = getHumanChoice()
const computerSelection = getComputerChoice()