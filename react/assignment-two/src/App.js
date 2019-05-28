import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    inpLength: 0,
  }

  changeInpNum = (event) => {
    this.setState({inpLength: event.target.value.length})
  }

  render() {
    return (
      <div className="App">
        <input
          type="text"
          onChange = {(event) => this.changeInpNum(event)}
        />
        <p> {this.state.inpLength} </p>
      </div>
    );
  }
}

export default App;
