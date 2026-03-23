let humanScore = 0;
let computerScore = 0;

let z = document.createElement("img")
z.setAttribute('width', '373px')
z.setAttribute('height', '248px')
z.style.display = "block"
z.style.marginLeft = "auto"
z.style.marginRight = "auto"

let x = document.createElement("img")
x.setAttribute('width', '373px')
x.setAttribute('height', '248px')
x.style.display = "block"
x.style.marginLeft = "auto"
x.style.marginRight = "auto"

function getComputerChoice() {
    let options = ['rock', 'paper', 'scissor']
    let choice = options[Math.floor(Math.random() * 3)]
    let ui = choice.toString().toLowerCase()
    let computerChoose = document.querySelector(".computerChoiceUI")
    switch (ui) {
        case 'rock':
            x.setAttribute('src', 'img/rock.png')
            computerChoose.innerHTML = "";
            computerChoose.appendChild(x)
            return 'rock'
        case 'paper':
            x.setAttribute('src', 'img/paper.png')
            computerChoose.innerHTML = "";
            computerChoose.appendChild(x)
            return 'paper'
        case 'scissor':
            x.setAttribute('src', 'img/scissors.png')
            computerChoose.innerHTML = "";
            computerChoose.appendChild(x)
            return 'scissor'
    }
}

function getHumanChoice() {
    let menu = document.querySelector(".humanChoice")
    let humanChoose = document.querySelector(".humanChoiceUI")
    menu.addEventListener('click', (event) => {
        let target = event.target
        let choice = target.id
        switch (target.id) {
            case 'rock':
                z.setAttribute('src', 'img/rock.png')
                break
            case 'paper':
                z.setAttribute('src', 'img/paper.png')
                break
            case 'scissor':
                z.setAttribute('src', 'img/scissors.png')
                break

        }
        humanChoose.innerHTML = "";
        humanChoose.appendChild(z)
        playRound(choice)
    })
}


function playRound(humanChoice) {
    let computerChoice = getComputerChoice()
    let score = document.querySelector(".scoreboard")
    if (humanChoice === computerChoice) {
        console.log("It's a tie!")
    } else if (humanChoice === 'scissor' && computerChoice === 'paper' ||
        humanChoice === 'rock' && computerChoice === 'scissor' ||
        humanChoice === 'paper' && computerChoice === 'rock') {
        humanScore++
    } else {
        computerScore++
    }
    score.textContent = `Computer: ${computerScore} | Human: ${humanScore}`
}


function playGame() {
    getHumanChoice()
}

playGame()