let boxes = document.querySelectorAll(" .box ");

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
boxes.forEach((box) => {
    box.addEventListener("click" ,() => {
       
        if(turn){
             box.innerText = " O" ;
             turn = false ;

        }
        else{
             box.innerText = " X "
             turn = true ;
        }
    })
})