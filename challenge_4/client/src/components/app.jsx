import React from 'react';
import Banner from './banner.jsx';
import Board from './board.jsx';
import $ from 'jquery';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      board: [
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0]
      ],
      size: [7, 6],
      gameIsDone: false,
      end: null,
      turn: 'Red',
      msg: "Red, it's your turn!"
    };
  }

  // To retrieve square coordinates from string:
  // var nums = str.split(',').map(x => Number(x))
  handleClick(event, id) {
    event.preventDefault();

    // Don't allow further play if game is done
    if (gameIsDone) {
      return;
    }

    // Find which square should receive piece
    var coor = id.split(',').map(x => Number(x));
    var x = coor[0];
    var newBoard = this.state.board;
    var targetY;
    for (var y = this.state.size[1] - 1; y >= 0; y--) {
      if (targetY === undefined) {
        if (newBoard[y][x] === 0) {
          if (this.state.turn === 'Red') {
            newBoard[y][x] = -1;
          } else {
            newBoard[y][x] = 1;
          }
          targetY = y;
        }
      }
    }
    if (targetY === undefined) {
      return;
    }

    // Update board to reflect game
    this.setState({ board: newBoard });
    this.renderPiece(x, targetY, this.state.turn);
  }

  renderPiece(x, y, turn) {
    // apply styling this.state.turn to target button
    var xy = [x, y];
    var coor = xy.toString();
    var id = coor.replace(',', '\\\\,');
    $('#' + id).css({ 'background-color': turn });
  }

  renderTurn(turn) {
    // call win check function(s)
    if (turn === 'Red') {
      this.setState({ turn: 'Yellow' });
    } else {
      this.setState({ turn: 'Red' });
    }

    this.setState({ msg: `${this.state.turn}, it's your turn!` });
  }

  render() {
    return (
      <div>
        <Banner msg={this.state.msg} />
        <Board size={this.state.size} />
      </div>
    );
  }
}

export default App;
