// winner combos
let winnerCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [0, 4, 8],
];

// state
// let gameBoard = ["X", "O", "X", "O", "X", "O", "X", "O", "X"];
let gameBoard = ["", "", "", "", "", "", "", "", ""];
let playCount = 0;
let gameWon = false;
let gameWinner;

// dom elements
const main = document.querySelector("main");
const divs = Array.from(document.querySelectorAll("div"));
const button = document.querySelector("button");
const winnerText = document.querySelector("p");

// event listeners
document.addEventListener("DOMContentLoaded", fillBoard);
main.addEventListener("click", userPlay);
button.addEventListener("click", resetGame);

// functions
function fillBoard() {
  gameBoard.forEach((box, index) => {
    divs[index].innerText = box;
  });
}

function resetGame() {
  gameBoard = ["", "", "", "", "", "", "", "", ""];
  playCount = 0;
  gameWon = false;
  gameWinner;
  fillBoard();
  winnerText.innerText = "";
}

function announceWinner(winner) {
  winnerText.innerText = `PLAYER ${winner} WINS!!!`;
}

function checkWinner(gameArr) {
  winnerCombos.forEach((combo) => {
    if (
      gameArr[combo[0]] === "X" &&
      gameArr[combo[1]] === "X" &&
      gameArr[combo[2]] === "X"
    ) {
      gameWon = true;
      gameWinner = "X";
      announceWinner(gameWinner);
      return;
    }

    if (
      gameArr[combo[0]] === "O" &&
      gameArr[combo[1]] === "O" &&
      gameArr[combo[2]] === "O"
    ) {
      gameWon = true;
      gameWinner = "O";
      announceWinner(gameWinner);
      return;
    }
  });
}

function userChoice(e, letter) {
  e.target.innerText = letter;
  playCount++;
  gameBoard[+e.target.id] = letter;
  checkWinner(gameBoard);
  return;
}

function userPlay(e) {
  if (playCount === 9 || gameWon) {
    return;
  }

  if (e.target.innerText === "" && playCount % 2 === 0) {
    userChoice(e, "X");
  }

  if (e.target.innerText === "" && playCount % 2 !== 0) {
    userChoice(e, "O");
  }
}
