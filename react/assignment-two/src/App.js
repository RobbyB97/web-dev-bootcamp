import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import ValidComponent from './ValidComponent/ValidComponent'
import CharBox from './CharBox/CharBox'

class App extends Component {
  state = {
    inpLength: 0,
    outText: 'Text too short!'
  }

  changeInpNum = (event) => {
    this.setState({inpLength: event.target.value.length})
    this.setState({inp: event.target.value})

    if (this.state.inpLength < 5) {
      this.setState({outText: 'Text too short!'})
    } else {
      this.setState({outText: 'Text long enough!'})
    }
  }

  removeCharInp = (index) => {
    const newInput = this.state.inp.slice(0, index) + this.state.inp.slice(index+1)
    this.setState({inp: newInput})

  }

  render() {

    let chars=null

    if (this.state.inp) {
      const charset = this.state.inp.split('')

      chars = (
        <div>
          {charset.map((char, index) => {
            return (
              <CharBox
                char = {char}
                click = {() => this.removeCharInp(index)}/>
            )
          })}
        </div>
      )
    } else {
      chars = null
    }

    return (
      <div className="App">
        <input
          type="text"
          onChange = {(event) => this.changeInpNum(event)}
          value = {this.state.inp}
        />
        <p> {this.state.inpLength} </p>
        <ValidComponent
          text = {this.state.outText}
        />
        {chars}
      </div>
    );
  }
}

export default App;
