let boxes = document.querySelectorAll(" .box ");
let resetBtn = document.querySelector(".reset-btn");
let msgContainer = document.querySelector(".msg-container") ;
let newButton = document.querySelector("#new-btn") ;
let message = document.querySelector("#msg") ;

let turn = true;

let pattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [3, 4, 5],
  [6, 7, 8],
];
const checkWinner = () => {
  for (gamePatterm of pattern) {
    let posVal1 = boxes[gamePatterm[0]].innerText;
    let posVal2 = boxes[gamePatterm[1]].innerText;
    let posVal3 = boxes[gamePatterm[2]].innerText;

    if (posVal1 != "" && posVal2 != "" && posVal3 != "") {
      if (posVal1 === posVal2 && posVal2 === posVal3) {
         showWinner(posVal1)
      }
    }
  }
};
const showWinner = (winner) => {
  message.innerText =`Congratulations winner is ${winner}` ;
    msgContainer.classList.remove("hide") ;
      disableBox ();
}
// ========= disabled box  after winning ==============
const disableBox = () => {
  for(let box of boxes){
    box.disabled = true ;
  }
}
// =============== reset ===================
const resetGame = () => {
   turnO = true;
   enableBox() ;
   msgContainer.classList.add("hide")
}
// ============ enables after reset ==========
const enableBox = () => {
  for(let box of boxes){
    box.disabled = false ;
    box.innerText = ""
  }}

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turn) {
      box.innerText = " O";
      turn = false;
    } else {
      box.innerText = " X ";
      turn = true;
    }
    box.disabled = true;
    checkWinner() ;
  });
});
// ============= Reset button event================
newButton.addEventListener("click" ,resetGame) ;
 resetBtn.addEventListener("click" ,resetGame) ;
