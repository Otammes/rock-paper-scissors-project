console.log("Hello")



function getComputerChoice(outcome) {
    if (outcome <= 0.33)
        return("rock")
    else if (outcome >= 0.34 && outcome <= 0.67)
        return("paper")
    else
        return("scissors")

}

let outcome = Math.random();
console.log(getComputerChoice(outcome))


function getHumanChoice() {
    let choice = prompt("Rock, Paper or Scissors?")
    return choice
}
console.log(getHumanChoice())