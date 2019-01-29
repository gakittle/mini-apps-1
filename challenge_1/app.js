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

  Orange: FF9225
  Dark Blue: 1A1B29
  Light Blue: ADDFE9
*/

var Board = function () {
  this.turn = 'X';
  this.game = 'go';
  this.isTie = false;
  this.isDone = false;
  this.turnsLeft = 9;
  this.players = {
    X: ['', 0],
    O: ['', 0],
  };
  this.winner = null;
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
    ttt.turnsLeft--;
    if (!ttt.turnsLeft) {
      ttt.isTie = true;
    }
    ttt.checkGame(ttt.turn);
    ttt.turn = ttt.takeTurn(ttt.turn);
  }
};

Board.prototype.checkGame = (turn) => {
  if (ttt.isTie) {
    ttt.renderEnd('tie');
  } else {
    var squares = Array.from(document.getElementsByClassName('box'));
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
        var winningRow = i;
      }
    }
    if (rowWin) {
      ttt.renderEnd(turn, 'row', winningRow);
    } else {

      // check columns
      var colWin = false;
      for (var i = 0; i < rowLength; i++) {
        var colSum = 0;
        for (var j = 0; j < squares.length; j += 3) {
          if (squares[i + j].innerHTML === turn) {
            colSum++;
          }
        }
        if (colSum === rowLength) {
          colWin = true;
          var winningCol = i;
        }
      }
      if (colWin) {
        ttt.renderEnd(turn, 'col', winningCol);
      } else {

        // check diagonals
        var majorDiagonal = [squares[0], squares[4], squares[8]];
        var minorDiagonal = [squares[2], squares[4], squares[6]];

        var diags1 = majorDiagonal.filter(x => x.innerHTML === turn);
        var diags2 = minorDiagonal.filter(x => x.innerHTML === turn);
        if (diags1.length === rowLength) {
          ttt.renderEnd(turn, 'majorDiag');
        } else if (diags2.length === rowLength) {
          ttt.renderEnd(turn, 'minorDiag');
        }
      }
    }
  }

};

Board.prototype.renderEnd = (end, type, coor) => {
  ttt.isDone = true;
  if (end === 'tie') {
    document.getElementsByTagName('h3')[0].innerHTML = 'I guess we all lost this one.';
  } else {
    document.getElementsByTagName('h3')[0].innerHTML = ttt.players[end][0] + ' wins!';
    ttt.players[end][1]++;
    document.getElementById(end + 'Score').innerHTML = ttt.players[end][1];
    // var oldWinCount = Number(document.getElementById(end + 'Score')[0]);
    // document.getElementById[0].innerHTML = oldWinCount + 1;
  }
  if (type) {
    var squares = Array.from(document.getElementsByClassName('box'));
    if (type === 'row') {
      for (var i = 0; i < 3; i++) {
        squares[i + coor].style.color = 'red';
      }
    } else if (type === 'col') {
      for (var i = 0; i < squares.length; i += 3) {
        squares[i + coor].style.color = 'red';
      }
    } else if (type === 'majorDiag') {
      var majorDiagonal = [squares[0], squares[4], squares[8]];
      majorDiagonal.forEach((square) => {
        square.style.color = 'red';
      });
    } else if (type === 'minorDiag') {
      var minorDiagonal = [squares[2], squares[4], squares[6]];
      minorDiagonal.forEach((square) => {
        square.style.color = 'red';
      });
    }
  }
};

Board.prototype.handleNewGame = () => {
  var squares = Array.from(document.getElementsByClassName('box'));
  squares.forEach((square) => {
    square.innerHTML = '';
    square.style.color = '#FF9225';
  });
  ttt.turn = ttt.winner || 'X';
  ttt.isTie = false;
  ttt.isDone = false;
  ttt.turnsLeft = 9;
  ttt.winner = null;
  document.getElementsByTagName('h3')[0].innerHTML = 'The saga continues...';
};

let ttt = new Board();
var playerX = prompt('Player X, enter your name:');
var playerO = prompt('Player O, enter your name:');

ttt.players.X[0] = playerX;
ttt.players.O[0] = playerO;

document.getElementById('X').innerHTML = 'X: ' + playerX;
document.getElementById('O').innerHTML = 'O: ' + playerO;
