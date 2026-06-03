console.log("Hello, ready for a game of Rock, Paper, Scissors?")



function getComputerChoice(outcome) {
    if (outcome <= 0.33){
        return("rock")}
    else if (outcome <= 0.67){
        return("paper")}
    else {
        return("scissors")}

} 
let humanScore = 0
let computerScore = 0


const rockButton = document.querySelector("#rock")
const paperButton = document.querySelector("#paper")
const scissorsButton = document.querySelector("#scissors")

const results = document.querySelector("#results")
const scoreboard = document.querySelector("#scoreboard")

rockButton.addEventListener("click", () => {playRound(rockButton.id, getComputerChoice(Math.random()))})
paperButton.addEventListener("click", () => {playRound(paperButton.id, getComputerChoice(Math.random()))})
scissorsButton.addEventListener("click", () => {playRound(scissorsButton.id, getComputerChoice(Math.random()))})


function playRound(humanChoice, computerChoice) {

    
    
    if (humanChoice === "rock" && computerChoice === "rock" 
        || humanChoice === "paper" && computerChoice === "paper"
        || humanChoice === "scissors" && computerChoice === "scissors"
    ) {results.textContent = "It's a tie"
    }

    else if (humanChoice === "rock" && computerChoice === "scissors"
        || humanChoice === "scissors" && computerChoice === "paper"
        || humanChoice === "paper" && computerChoice === "rock") {
        
        results.textContent = "You win this round!"
        ++humanScore
        }
    
    else {results.textContent = "You lose this round!"
        ++computerScore
    }   
    

    if (humanScore === 5) {
    alert("You have won!")
    }
else if (computerScore === 5){
    alert("You have lost!")
}

scoreboard.textContent = `Human: ${humanScore} | Computer: ${computerScore}`

}
