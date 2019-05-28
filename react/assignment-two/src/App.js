import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import ValidComponent from './ValidComponent/ValidComponent'

class App extends Component {
  state = {
    inpLength: 0,
    outText: 'Text too short!'
  }

  changeInpNum = (event) => {
    this.setState({inpLength: event.target.value.length})

    if (this.state.inpLength < 5) {
      this.setState({outText: 'Text too short!'})
    } else {
      this.setState({outText: 'Text long enough!'})
    }
  }

  render() {
    return (
      <div className="App">
        <input
          type="text"
          onChange = {(event) => this.changeInpNum(event)}
        />
        <p> {this.state.inpLength} </p>
        <ValidComponent
          text = {this.state.outText}
        />
      </div>
    );
  }
}

export default App;
