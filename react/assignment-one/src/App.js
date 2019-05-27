import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import UserInput from './UserInput/UserInput'
import UserOutput from './UserOutput/UserOutput'

class App extends Component {
  state = {
    name: 'Mang'
  }
  render() {
    return (
      <div className="App">
        <UserInput />
        <UserOutput />
        <UserOutput />
      </div>
    );
  }
}

export default App;
