/*-------------------------------- Constants --------------------------------*/
const squareEls = document.querySelectorAll(".sqr");
//console.log(squareEls);
const messageEl = document.querySelectorAll("#message");
//console.log(messageEl);
/*---------------------------- Variables (state) ----------------------------*/
let board;
let turn;
let winner;
let tie;
/*------------------------ Cached Element References ------------------------*/

/*-------------------------------- Functions --------------------------------*/
function render() {
    updateMessage()
    updateBoard()    
    placePiece()
    console.log(board)
}
const winningCombos = [
[0, 1, 2],
[3, 4, 5],
[6, 7, 8],
[0, 3, 6],
[1, 4, 7],
[2, 5, 8],
[0, 4, 8],
[6, 4, 2],
]
    const updateBoard = function() {
        board.forEach((square, squareIndex) => {
    squareEls[squareIndex].textContent = square;
        });


const updateMessage = () => {
    if (winner === false && tie === false) {
        messageEl.innerText = turn;
       }  else if (!winner && tie) {
        messageEl.textContent = "It's a tie!"
        } else {
            messageEl.textContent = `$(turn) is the winner!`
        }
 }

 const placePiece = (index) => {
    board[index] = turn
}

const checkForWinner = () => {
    for (let i=0 ; i < winningCombos.length ; i++) {
       for(let j = 0; j < winningCombos[i].length; j++) {
        if (winningCombos[i].length > 0) {
            
        }
       } 
    }
}
 const handleClick = e => {
console.log([...e.target.classList].includes('sqr'))
}

squareEls.forEach(square => {
square.addEventListener('click', handleClick)
})


const init = () => {
  board = ["", "", "", "", "", "", "", "", ""];
  turn = "x";
  winner = false;
  tie = false;

  
  render()
};
window.onload = () => {
  init();
};

/*----------------------------- Event Listeners -----------------------------*/
