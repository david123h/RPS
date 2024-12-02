const options = ["rock", "paper", "scissors"];

function getPCchoice() {
  return options[Math.floor(Math.random() * 3)];
}

let getUserChoice;

function handleClick(value) {
  switch (value) {
    case "a":
      getUserChoice = "rock";
      break;
    case "b":
      getUserChoice = "paper";
      break;
    case "c":
      getUserChoice = "scissors";
      break;
    //   default:
    //     console.log('Unknown choice');
  }
  console.log(getUserChoice);
  fight(getUserChoice);
}

const paragraph = document.getElementById("myParagraph");
const userPoints = document.getElementById("you_p");
const pcPoints = document.getElementById("pc_p");
let userCount = 0;
let pcCount = 0;
let timeOutId;

function fight(getUserChoice) {
  if (userCount < 5 && pcCount < 5){let pcChose = getPCchoice();
  console.log(`user chose ${getUserChoice} and the pc chose ${pcChose}`);
  if (pcChose === getUserChoice) {
    console.log(`you both chose ${getPCchoice} nobody is beating this round`);
    paragraph.textContent = `you both chose ${pcChose} ,nobody is beating this round, play again`;
  } else {
    if (
      (getUserChoice === "rock" && pcChose === "scissors") ||
      (getUserChoice === "paper" && pcChose === "rock") ||
      (getUserChoice === "scissors" && pcChose == "paper")
    ) {
      paragraph.textContent = `you chose ${getUserChoice} and the pc chose ${pcChose},  you defeated the pc`;
      userCount++;
      userPoints.textContent = userCount;
    } else {
      paragraph.textContent = `you chose ${getUserChoice} and the pc chose ${pcChose}, the pc defeated you`;
      pcCount++;
      pcPoints.textContent = pcCount;
    }
  }
  } losingColor()
  wining()
}


function wining(){if  (userCount == 5){
  paragraph.textContent  = `Congratulations you won!`;
  timeOutId = setTimeout(resetTheGame,5000)
} else if (pcCount == 5) {
  paragraph.textContent  =`You lost! :(`;
  timeOutId = setTimeout(resetTheGame,5000)
}}

// Select all cards with the class 'card' and add event listeners
const cards = document.querySelectorAll(".card");
cards.forEach((card) => {
  card.addEventListener("click", () => {
    const value = card.getAttribute("data-value"); // Get data-value attribute
    handleClick(value);
  });
});

function resetTheGame(){
  userCount = 0;
  pcCount = 0;
  userPoints.textContent = userCount;
  pcPoints.textContent = pcCount;
  userPoints.style.color = `black`;
  pcPoints.style.color = `black`;
}

function losingColor(){
  if (userCount > pcCount){
    pcPoints.style.color = 'red'
    userPoints.style.color = `black`;
  } else if (pcCount > userCount){
    userPoints.style.color = `red`
    pcPoints.style.color = `black`;
  } else {
    userPoints.style.color = `black`;
  pcPoints.style.color = `black`;
  }
}

const resetButtun = document.getElementById("reset");
// resetButtun.addEventListener(`click`,() => {if(userCount < 5 && pcCount < 5){resetTheGame()}})
resetButtun.addEventListener(`click`,function (){resetTheGame();
  clearTimeout(timeOutId)
})