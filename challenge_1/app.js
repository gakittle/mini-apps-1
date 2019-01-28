/*
CONCERNS TO SEPARATE:

Model:
State of player's turn (X or O, X always starts)
State of game: ip, win, tie
State of each square
  On start up
  On reset
  On click

Viewer:
Render X's and O's
Render game complete
  win or tie

Controller:
click listener for each square in grid
  IF SQUARE IS EMPTY:
  Change state of square, render it
  Triggers assessment of game state
  Toggles state of player's turn
Reset button
  Defaults each square state, render it
  Resets state of game
  Sets state of player's turn to X
*/

var Board = function () {
  this.turn = 'X';
  this.game = 'go';
};

Board.prototype.takeTurn = (letter) => {
  if (letter === 'X') {
    return 'O';
  } else {
    return 'X';
  }
}

Board.prototype.handleSquareClick = (event) => {
  // console.log(!!event.target.innerHTML);
  var square = event.target;
  if (!square.innerHTML) {
    square.innerHTML = ttt.turn;
    console.log(ttt);
    ttt.turn = ttt.takeTurn(ttt.turn);
  }
};

let ttt = new Board();
var boundSquareClick = ttt.handleSquareClick.bind(ttt);

console.log('hello from the world');