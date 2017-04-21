import React from 'react';
import PropTypes from 'prop-types';

class App extends React.Component {
    render() {
        let text = this.props.txt
        return (
            <div>
                <h1 >Hello world with React</h1> 
                <h3>data from props: {text} </h3> 
                <b> Bold tag </b>
            </div>
        )
    }
}

App.propTypes = {
    txt: PropTypes.string,
    cat: PropTypes.number.isRequired
};

App.defaultProps = {
    txt: 'this is the default text value for txt prop.'
}

export default App

/*import React from 'react';

class App extends React.Component {
    render() {
        let text = this.props.txt
        return (
            <div>
                <h1 >Hello world with React</h1> 
                <h3>data from props: {text} </h3> 
                <b> Bold tag </b>
            </div>
        )
    }
}

App.propTypes = {
    txt: React.PropTypes.string,
    cat: React.PropTypes.number.isRequired
};

export default App*/

/*import React from 'react';

const App = () => <h1>hello from stateless</h1>

export default App*/

/*import React from 'react';

class App extends React.Component {
    render() {
        return React.createElement('h1', null, 'Hello world with React')
    }
}

export default App*/

/*
import React from 'react';

const App = () => <h1>Hello React</h1>

export default App
*/

/*
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
*/