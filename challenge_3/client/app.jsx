class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'home',
      pages: ['home', 'f1', 'f2', 'f3'],
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

  handleButtonClick(event) {
    var pageIndex;
    var forms = this.state.pages;
    for (var i = 0; i < forms.length; i++) {
      if (this.state.page === forms[i]) {
        pageIndex = i + 1;
      }
    }
    var next = forms[pageIndex] || forms[0];
    this.setState({ page: next });
    forms.forEach(form => {
      if (form !== this.state.page) {
        document.getElementById(form).style.display = 'none';
      } else {
        document.getElementById(form).style.display = 'block';
      }
    });
  }

  componentDidMount() {
    this.handleButtonClick();
  }

  render() {
    return (
      <div id="parent">
        <Home onClick={this.handleButtonClick.bind(this)} />

        <F1
          fields={this.state.f1}
          onClick={this.handleButtonClick.bind(this)}
        />

        <F2
          fields={this.state.f2}
          onClick={this.handleButtonClick.bind(this)}
        />

        <F3
          fields={this.state.f3}
          onClick={this.handleButtonClick.bind(this)}
        />
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
      <button onClick={props.onClick}>Check Out!</button>
    </div>
  );
};

var F1 = props => {
  return (
    <div id="f1">
      {props.fields.map(field => {
        return <Field title={field} />;
      })}
      <button onClick={props.onClick} className="submit">
        Next!
      </button>
    </div>
  );
};

var F2 = props => {
  return (
    <div id="f2">
      {props.fields.map(field => {
        return <Field title={field} />;
      })}
      <button onClick={props.onClick} className="submit">
        Next!
      </button>
    </div>
  );
};

var F3 = props => {
  return (
    <div id="f3">
      {props.fields.map(field => {
        return <Field title={field} />;
      })}
      <button onClick={props.onClick} className="submit">
        Next!
      </button>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
