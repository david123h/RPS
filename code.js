const rock = document.getElementById('rock');
rock.addEventListener("click" , () => {return "rock"})

const paper = document.getElementById('paper');
paper.addEventListener("click" , () => {return "paper"})

const scissors = document.getElementById('scissors');
rock.addEventListener("click" , () => {return "scissors"})

const options = ["rock", "paper", "scissors"]

// let getPCchoice = options[Math.floor(Math.random()*3)]
// 

function getPCchoice(){
    return options[Math.floor(Math.random()*3)]
}

console.log(getPCchoice())