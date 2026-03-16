let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let options = ['rock', 'paper', 'scissor']
    let choice = Math.floor(Math.random() * 3)
    return options[choice]
}

function getHumanChoice() {
    let userChoice = prompt("Enter your choice")
    return userChoice.toString()
}

function playRound(humanChoice, computerChoice) {
    let humanC = humanChoice
    let computerC = computerChoice
    let human = humanC.toString().toLowerCase()
    let computer = computerC.toString().toLowerCase()

    if (human === 'scissor' && computer === 'paper' || human === 'rock' && computer === 'scissor' || human === 'paper' && computer === 'rock') {
        humanScore++
    } else {
        computerScore++
    }
}

function playGame() {
    for (let index = 0; index < 5; index++) {
        playRound(getHumanChoice(), getComputerChoice)
    }
    if (humanScore > computerScore) {
        console.log("Human you won")
    } else {
        console.log("You won AI")
    }
}

playGame();