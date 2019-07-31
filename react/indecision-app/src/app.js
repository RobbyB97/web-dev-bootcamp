import React from 'react'
import ReactDOM from 'react-dom'


// Import components
import AddOption from './components/addOption'
import Header from './components/header'


// Stateful Components
class IndecisionApp extends React.Component {
  constructor(props) {
    super(props)
    this.handleAddOption = this.handleAddOption.bind(this)
    this.handleDeleteOption = this.handleDeleteOption.bind(this)
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
    this.handlePick = this.handlePick.bind(this)
    this.state = {
      options: props.options
    }
  }
  componentDidMount() { // When component gets created
    try {
      const json = localStorage.getItem('options')
      const options = JSON.parse(json)
      if (options) {
        this.setState(() => ({options}))
      }
    } catch(e) {
      console.log('Invalid JSON')
    }
  }
  componentDidUpdate(prevProps, prevState) {  // When component is updated
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options)
      localStorage.setItem('options', json)
      console.log('Saving data')
    }
  }
  componentWillUnmount() {
    console.log('componentWillUnmount')
  }
  handlePick() {
    let num = Math.floor(Math.random() * this.state.options.length)
    return alert(this.state.options[num])
  }
  handleAddOption(option) {
    if (!option) {
      return 'Enter valid value to add item'
    } else if (this.state.options.indexOf(option) > -1) {
      return 'Option already exists!'
    }
    this.setState((prevState) => ({
      options: prevState.options.concat(option)
    }))
  }
  handleDeleteOption(optionToRemove) {
    console.log('handleDeleteOption', optionToRemove)
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => {
        return optionToRemove !== option
      })
    }))
  }
  handleDeleteOptions() {
    this.setState(() => ({
      options: []
    }))
  }
  render() {
    const subtitle = 'Put your life in the hands of a computer!'

    return (
      <div>
        <Header subtitle={subtitle} />
        <Action
          hasOptions={this.state.options.length === 0}
          handlePick={this.handlePick}
        />
        <Options
          handleDeleteOption={this.handleDeleteOption}
          options={this.state.options}
        />
        <AddOption
          handleAddOption={this.handleAddOption}
        />
        <RemoveOptions
          handleDeleteOptions={this.handleDeleteOptions}
        />
      </div>
    )
  }
}


const Action = (props) => {
  return (
    <div>
      <button disabled={props.hasOptions} onClick={props.handlePick}>Who's job is it?</button>
    </div>
  )
}
//{props.options.map((option) => {
//  return <Option option={option} key={option} />
//})}
const Options = (props) => {
  return (
    <div>
      {props.options.length === 0 && <p>Add an option to get started!</p>}
      {props.options.map((option) => (
        <Option
          key={option}
          option={option}
          handleDeleteOption={props.handleDeleteOption}
        />
      ))}
    </div>
  )
}

const Option = (props) => {
  return (
    <div>
      {props.option}
      <button
        onClick={(e) => {
          props.handleDeleteOption(props.option)
        }}
      >
        Remove option
      </button>
    </div>
  )
}

const RemoveOptions = (props) => {
  return (
    <div>
      <button onClick={props.handleDeleteOptions}>Delete Options</button>
    </div>
  )
}


// Default props
IndecisionApp.defaultProps = {
  options: ['ok']
}

Header.defaultProps = {
  title: 'Indecision'
}


// Variables
const $appRoot = document.getElementById('app')


ReactDOM.render(<IndecisionApp />, $appRoot)
