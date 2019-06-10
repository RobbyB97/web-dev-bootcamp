import React, { Component } from 'react'
import './App.css'
import Radium, {StyleRoot} from 'radium'

import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      {id: 'guy1', name: 'Dude', age: 53},
      {id: 'guy2', name: 'OMG', age: 1337},
      {id: 'guy3', name: 'NO WHEY', age: 5043}
    ],
    otherState: 'Hi i paul',
    showPersons: false
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id
    })

    const person = {
      ...this.state.persons[personIndex]
    }

    person.name = event.target.value

    const persons = [...this.state.persons]
    persons[personIndex] = person

    this.setState({persons: persons})
  }

  deletePerson = (personIndex) => {
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1)
    this.setState({persons: persons})
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons
    this.setState({showPersons: !doesShow})
  }

  render() {

    let persons=null

    if ( this.state.showPersons ) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                key={person.id}
                name={person.name}
                age={person.age}
                click={() => this.deletePerson(index)}
                changed={(event) => this.nameChangedHandler(event, person.id)}
              />
            )
          })}
        </div>
      )
    } else {
      persons = null
    }

    const style = {
        backgroundColor: 'white',
        font: 'inherit',
        border: '1px solid blue',
        padding: '8px',
        cursor: 'pointer',
        ':hover': {
          backgroundColor: 'black',
          color: 'white'
        }
    }

    style.backgroundColor = 'red'
    style[':hover'] = {
      backgroundColor: 'salmon',
      color: 'black'
    }

    let classes = []

    if (this.state.persons.length <= 2) {
      classes.push('red')
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold')
    }

    return (
      <StyleRoot>
        <div className="App">
          <h1> Im a React App </h1>
          <p className={classes.join(' ')}> It is working! </p>
          <button
            className="mainButton"
            style={style}
            onClick={this.togglePersonHandler}>
              Toggle Ppl
          </button>
          {persons}
        </div>
      </StyleRoot>
    );
  }
}

export default Radium(App)
