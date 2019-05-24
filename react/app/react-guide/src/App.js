import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> Im a React App </h1>
        <p> It is working! </p>
      </div>
    );
  }
}

class App1 extends Component {
// Hello, world!
  render() {
    return (
      <div className="App">
        <h1> Hello, world! </h1>
      </div>
    );
  }
}

class App2 extends Component {
// Alternative way to return Hello, world!
  render() {
    return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hello, world!'));
  }
}

export default App;
