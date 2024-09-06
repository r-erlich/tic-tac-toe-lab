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
    }
    const updateBoard = function() {
        board.forEach((square. sqaureIndex) => {
    squareEls[squareIndex]      
    });
}
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
