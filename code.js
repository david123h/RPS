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

function fight(getUserChoice) {
  let pcChose = getPCchoice();
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
      paragraph.textContent = `you chose ${getUserChoice} and the pc chose ${pcChose},  you beat the pc`;
      userCount++;
      userPoints.textContent = userCount;
    } else {
      paragraph.textContent = `you chose ${getUserChoice} and the pc chose ${pcChose}, the pc beat you`;
      pcCount++;
      pcPoints.textContent = pcCount;
    }
  }
}

// Select all cards with the class 'card' and add event listeners
const cards = document.querySelectorAll(".card");
cards.forEach((card) => {
  card.addEventListener("click", () => {
    const value = card.getAttribute("data-value"); // Get data-value attribute
    handleClick(value);
  });
});
