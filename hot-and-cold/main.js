let randomNumber;
let formerNumber;

// dom elements
const body = document.querySelector("body");
const form = document.querySelector("#gameForm");
const choice = document.querySelector("#choice");
const container = document.querySelector(".container");
const temp = document.querySelector("#temp-id");
const newGame = document.querySelector("#newGame");

// event listeners
document.addEventListener("DOMContentLoaded", chooseRandomNumber);
form.addEventListener("submit", submitForm);
newGame.addEventListener("click", resetGame);

// functions
function chooseRandomNumber() {
  randomNumber = Math.floor(Math.random() * 101);
}

function submitForm(e) {
  e.preventDefault();

  temp.classList.add("temp");

  if (choice.value < randomNumber) {
    temp.innerText = "COLD";
  } else {
    temp.innerText = "HOT";
  }
}

function resetGame() {
  chooseRandomNumber();
  choice.value = "";
  temp.classList.remove("temp");
  temp.innerText = "";
}
