let randomNumber;
let formerNumber = null;
let randomUp = [];
let randomDown = [];

// dom elements
const body = document.querySelector("body");
const form = document.querySelector("#gameForm");
const choice = document.querySelector("#choice");
const container = document.querySelector(".container");
const temp = document.querySelector("#temp-id");
const newGame = document.querySelector("#newGame");
const submitBtn = document.querySelector("#submitBtn");

// event listeners
document.addEventListener("DOMContentLoaded", chooseRandomNumber);
form.addEventListener("submit", submitForm);
newGame.addEventListener("click", resetGame);

// functions
function chooseRandomNumber() {
  randomUp = [];
  randomDown = [];
  randomNumber = Math.floor(Math.random() * 101);

  for (i = 1; i <= 20; i++) {
    randomUp.push(randomNumber + i);
    randomDown.push(randomNumber - i);
  }
}

function submitForm(e) {
  e.preventDefault();

  temp.classList.add("temp");

  if (choice.value == randomNumber) {
    temp.innerText = "CORRECT!!!";
    submitBtn.setAttribute("disabled", true);
    return;
  }

  if (formerNumber) {
    if (
      randomUp.includes(+choice.value) ||
      randomDown.includes(+choice.value)
    ) {
      temp.innerText = "GETTING HOTTER!!!";
      formerNumber = +choice.value;
    } else {
      temp.innerText = "GETTING COLDER!!!";
      formerNumber = +choice.value;
    }
    return;
  }

  if (randomUp.includes(+choice.value) || randomDown.includes(+choice.value)) {
    temp.innerText = "HOT!!!";
    formerNumber = +choice.value;
  } else {
    temp.innerText = "COLD!!!";
    formerNumber = +choice.value;
  }
}

function resetGame() {
  chooseRandomNumber();
  choice.value = "";
  temp.classList.remove("temp");
  temp.innerText = "";
  submitBtn.removeAttribute("disabled");
}
