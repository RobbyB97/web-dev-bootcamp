import React, { Component } from 'react'
import './App.css'
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
  switchNameHandler = (newName) => {
    //alert('OMG I BEEN CLIKT!')
    this.setState({
      persons: [
        {name: newName, age: 90},
        {name: 'BRO', age: 53}
      ]
    } )
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        {name: event.target.value, age: 90},
        {name: 'BRO', age: 53}
      ]
    } )
  }

  render() {
    const style = {
        backgroundColor: 'white',
        font: 'inherit',
        border: '1px solid blue',
        padding: '8px',
        cursor: 'pointer'
    }

    return (
      <div className="App">
        <h1> Im a React App </h1>
        <p> It is working! </p>
        <button
          style={style}
          onClick={() => this.switchNameHandler('JEEBIS!')}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
          click={this.switchNameHandler.bind(this, 'HOLY COW!')}
          changed={this.nameChangedHandler}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}>
            I like trains
        </Person>
      </div>
    );
  }
}

export default App;
