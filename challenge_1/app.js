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
  this.isTie = false;
  this.isDone = false;
};

Board.prototype.takeTurn = (letter) => {
  if (letter === 'X') {
    return 'O';
  } else {
    return 'X';
  }
}

Board.prototype.handleSquareClick = (event) => {
  if (ttt.isDone) {
    return;
  }
  var square = event.target;
  if (!square.innerHTML) {
    square.innerHTML = ttt.turn;
    console.log(ttt);
    ttt.checkGame(ttt.turn);
    ttt.turn = ttt.takeTurn(ttt.turn);
  }
};

Board.prototype.checkGame = (turn) => {
  if (ttt.isTie) {
    ttt.renderEnd();
  } else {
    var squares = Array.from(document.getElementsByClassName('box'));
    console.log(Array.isArray(squares), squares);
    var rowLength = Math.pow(squares.length, 0.5);

    // check all rows
    var rowWin = false;
    for (var i = 0; i < squares.length; i += rowLength) {
      var rowSum = 0
      for (var j = 0; j < rowLength; j++) {
        if (squares[i + j].innerHTML === turn) {
          rowSum++;
        }
      }
      if (rowSum === rowLength) {
        rowWin = true;
      }
    }
    if (rowWin) {
      ttt.renderEnd(turn);
    } else {

      // check columns
      var colWin = false;
      for (var i = 0; i < rowLength; i++) {
        var colSum = 0;
        for (var j = 0; j < squares.length; j += 3) {
          if (squares[i + j].innerHTML === turn) {
            colSum++;
            console.log(colSum);
          }
        }
        if (colSum === rowLength) {
          colWin = true;
        }
      }
      if (colWin) {
        ttt.renderEnd(turn);
      } else {

        // check diagonals
        var majorDiagonal = [squares[0], squares[4], squares[8]];
        var minorDiagonal = [squares[2], squares[4], squares[6]];

        var diags1 = majorDiagonal.filter(x => x.innerHTML === turn);
        var diags2 = minorDiagonal.filter(x => x.innerHTML === turn);
        if (diags1.length === rowLength || diags2.length === rowLength) {
          ttt.renderEnd(turn);
        }
      }
    }
  }

};

Board.prototype.renderEnd = (turn) => {
  ttt.isDone = true;
  console.log('Player ' + turn + ' wins!');
};

let ttt = new Board();
