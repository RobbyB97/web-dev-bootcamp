import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      {name: 'Dude', age: 53},
      {name: 'OMG', age: 1337},
      {name: 'NO WHEY', age: 5043}
    ]
  }

  switchNameHandler = () => {
    //alert('OMG I BEEN CLIKT!')
    this.setState({
      persons: [
        {name: 'BRO', age: 53},
        {name: 'OMG', age: 1337},
        {name: 'NO WHEY', age: 5043}
      ]
    });
  }

  render() {
    return (
      <div className="App">
        <h1> Im a React App </h1>
        <p> It is working! </p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>I like trains</Person>
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
