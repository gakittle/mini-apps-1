import React from 'react';
import Banner from './banner.jsx';
import Board from './board.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      board: [],
      size: [7, 6],
      game: 'ip',
      turn: 'red',
      msg: "Red, it's your turn!"
    };
  }

  // To retrieve square coordinates from string:
  // var nums = str.split(',').map(x => Number(x))

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
