import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      {name: 'Dude', age: 53},
      {name: 'OMG', age: 1337},
      {name: 'NO WHEY', age: 5043}
    ],
    otherState: 'Hi i paul'
  }
  //state = {
  //  persons: [
  //    {name: 'Dude', age: 53},
  //    {name: 'OMG', age: 1337},
  //    {name: 'NO WHEY', age: 5043}
  //  ],
  //}
  switchNameHandler = () => {
    //alert('OMG I BEEN CLIKT!')
    this.setState({
      persons: [
        {name: 'Dude', age: 90},
        {name: 'BRO', age: 53},
        //{name: 'OMG', age: 1337},
        //{name: 'NO WHEY', age: 5043}
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

export default App;
