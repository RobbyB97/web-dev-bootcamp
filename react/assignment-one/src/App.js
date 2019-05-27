import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import UserInput from './UserInput/UserInput'
import UserOutput from './UserOutput/UserOutput'

class App extends Component {
  state = {
    name: 'Mang'
  }

  switchName = (username) => {
    this.setState({
      name: username
    })
  }

  changeName = (event) => {
    this.setState({
      name: event.target.value
    })
  }

  render() {
    const styles={
      backgroundColor: '#ccc',
      height: '100vh'
    }
    return (
      <div className="App" style={styles}>
        <UserInput
          name={this.state.name}
          click={this.switchName.bind(this, this.state.name)}
          changed={this.changeName}
        />
        <UserOutput
          name={this.state.name}
        />
        <UserOutput />
      </div>
    );
  }
}

export default App;
