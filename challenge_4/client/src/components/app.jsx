import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      board: []
    };
  }

  render() {
    return <div id="board">Welcome to the 4verse.</div>;
  }
}

export default App;
