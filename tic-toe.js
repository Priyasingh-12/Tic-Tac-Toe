let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset-btn");
let msgContainer = document.querySelector(".msg-container");
let newButton = document.querySelector("#new-btn");
let message = document.querySelector("#msg");

let winSound = new Audio("win.mp3");
let drawSound = new Audio("draw.mp3");
let clickSound = new Audio("click.mp3");
let resetClickButton = new Audio("reset.mp3")

let turn = true;

let pattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [3, 4, 5],
  [6, 7, 8],
  [2, 4, 6],
];

// ========== Check Winner ==========
const checkWinner = () => {
  for (let gamePattern of pattern) {
    let posVal1 = boxes[gamePattern[0]].innerText.trim();
    let posVal2 = boxes[gamePattern[1]].innerText.trim();
    let posVal3 = boxes[gamePattern[2]].innerText.trim();

    if (posVal1 !== "" && posVal2 !== "" && posVal3 !== "") {
      if (posVal1 === posVal2 && posVal2 === posVal3) {
        showWinner(posVal1);
        return true; // winner found
      }
    }
  }
  return false; // no winner
};

// ========== Show Winner ==========
const showWinner = (winner) => {
  message.innerText = `🎉 Congratulations, winner is ${winner}`;
  msgContainer.classList.remove("hide");
  disableBox();
  winSound.play();
};

// ========== Disable All ==========
const disableBox = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

// ========== Enable for Reset ==========
const enableBox = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

// ========== Reset Game ==========
const resetGame = () => {
  turn = true;
  enableBox();
  resetClickButton.play();
  msgContainer.classList.add("hide");
};

// ========== Show Draw ==========
const showDraw = () => {
  message.innerText = "😮 Aww it's a Draw!";
  msgContainer.classList.remove("hide");
  disableBox();
  drawSound() ;
};

// ========== Game Play ==========
boxes.forEach((box) => {
  box.addEventListener("click", () => {
     clickSound.play();
    if (turn) {
      box.innerText = "O";
      turn = false;
    } else {
      box.innerText = "X";
      turn = true;
    }
    box.disabled = true;

    // check winner
    let isWinner = checkWinner();

    // if no winner, check draw
    if (!isWinner) {
      let allFilled = true;
      boxes.forEach((b) => {
        if (b.innerText.trim() === "") {
          allFilled = false;
        }
      });

      if (allFilled) {
        showDraw();
      }
    }
  });
});

// ========== Reset Buttons ==========
newButton.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
