class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'home'
      // 'home', 'f1', 'f2', 'f3'
    };
  }

  render() {
    return (
      <div className="checkout">
        <button>Check Out!</button>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
