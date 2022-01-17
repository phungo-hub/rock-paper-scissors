const result = document.querySelector('.result');
const btnRock = document.querySelector('#rock');
const btnPaper = document.querySelector('#paper');
const btnScissors = document.querySelector('#scissors');
const reset = document.querySelector('#reset');
const announce = document.querySelector('.announce');
const playerChoice = ['rock', 'paper', 'scissors'];
const buttons = document.querySelectorAll('button');



let playerScore = document.querySelector('.player_score');
let computerScore = document.querySelector('.computer_score');

let arrIndex = 0;
let initPlayerScore = 0;
let initComputerScore = 0;

// hide start container
document.getElementById("startbutton").addEventListener("click", hideDiv);
let startContainer = document.getElementById('startcontainer');

function hideDiv() {
    startContainer.style.display = 'none';
}

function computerPlay() {
    let randNumber = Math.random();

    if (randNumber <= 1/3) {
        return "rock";
    } else if (randNumber > 2/3) {
        return "paper";
    } else {return "scissors";}
}

function playRound(playerSelection, computerSelection) {
    // case player "Rock"
    if (playerSelection === "rock" && computerSelection === "scissors") {
        announce.textContent = "Computer: scissors. You won";
        return "player won";
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        announce.textContent = "Computer: paper. Computer won";
        return "computer won";
    }
    // case player "Paper"
    else if (playerSelection === "paper" && computerSelection === "rock") {
        announce.textContent = "Computer: rock. You won"
        return "player won";
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        announce.textContent = "Computer: scissors. Computer won"
        return "computer won";
    } 
    // case player "Scissors"
    else if (playerSelection === "scissors" && computerSelection === "paper") { 
        announce.textContent = "Computer: paper. You won"
        return "player won";
    } else if (playerSelection === "scissors" && computerSelection === "rock"){
        announce.textContent = "Computer: rock. Computer won"
        return "computer won";

    // case draw
    } else if (playerSelection ===  computerSelection ) {
        announce.textContent = "Draw"
        return "draw";
    }
}

// function game()
function gameResult() {
    if (initPlayerScore === 5)  {
            result.textContent = "You Won";
        } else if (initComputerScore === 5) {
            result.textContent = "Computer Won";
        }
    }

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let oneRound = playRound(button.id, computerPlay());
        if (initPlayerScore < 5 && initComputerScore < 5) {
            if (oneRound === "player won") {
                initPlayerScore += 1;
                playerScore.textContent = initPlayerScore;
            } else if (oneRound === "computer won") {
                initComputerScore += 1;
                computerScore.textContent = initComputerScore;
            }
        }
        gameResult();
    });
  });


btnRock.innerHTML = '<img src = "image/rock.png">';
btnScissors.innerHTML = '<img src = "image/scissors.png">';
btnPaper.innerHTML = '<img src = "image/paper.png">';

reset.addEventListener('click', () => {   
        initPlayerScore = 0;
        playerScore.textContent = initPlayerScore;
        initComputerScore = 0;
        computerScore.textContent = initComputerScore;
        result.textContent = "";
})
