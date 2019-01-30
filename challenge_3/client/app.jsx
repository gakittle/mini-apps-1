class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'home',
      // 'home', 'f1', 'f2', 'f3'
      f1: ['Name', 'Email', 'Password'],
      f2: [
        'Address Line 1',
        'Address Line 2',
        'City',
        'State',
        'ZIP Code',
        'Phone #'
      ],
      f3: [
        'Credit Card #',
        'Expiry Date',
        'CVV',
        'Billing Address 1',
        'Billing Address 2',
        'City',
        'State',
        'ZIP Code'
      ]
    };
  }

  render() {
    return (
      <div id="parent">
        <Home />

        <F1 fields={this.state.f1} />

        <F2 fields={this.state.f2} />

        <F3 fields={this.state.f3} />
      </div>
    );
  }
}

var Field = props => {
  return (
    <div className="info">
      {props.title + ':'}
      <form className="text">
        <input />
      </form>
    </div>
  );
};

var Home = props => {
  return (
    <div id="home">
      <button>Check Out!</button>
    </div>
  );
};

var F1 = props => {
  return (
    <div id="f1">
      {props.fields.map(field => {
        return <Field title={field} />;
      })}
      <button className="submit">Next!</button>
    </div>
  );
};

var F2 = props => {
  return (
    <div id="f2">
      {props.fields.map(field => {
        return <Field title={field} />;
      })}
      <button className="submit">Next!</button>
    </div>
  );
};

var F3 = props => {
  return (
    <div id="f3">
      {props.fields.map(field => {
        return <Field title={field} />;
      })}
      <button className="submit">Next!</button>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
