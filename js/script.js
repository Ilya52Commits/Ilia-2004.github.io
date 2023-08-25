// main
const board = document.querySelector("#board");
const board1 = document.querySelector("#board-1");
// sertificate
const addBtn = document.querySelector(".show-btn");
const serts = document.querySelector(".certificates");

const colors = ["#e74c3c", "#8e44ad", "#3498db", "#e67e22", "#2ecc71"];
const SQUARES_NUMBER = 948;

addSquers(board);
addSquers(board1);

function setColor(event) {
  const element = event.target;
  const color = getRandomColor();
  element.style.backgroundColor = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(event) {
  const element = event.target;
  element.style.backgroundColor = "#1d1d1d";
  element.style.boxShadow = `0 0 2px #000`;
}

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

addBtn.addEventListener("click", () => {
  serts.style.display = "block";
});

// helpers
function addSquers(field) {
  for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement("div");
    square.classList.add("square");

    square.addEventListener("mouseover", setColor);

    square.addEventListener("mouseleave", removeColor);

    field.append(square);
  }
}
