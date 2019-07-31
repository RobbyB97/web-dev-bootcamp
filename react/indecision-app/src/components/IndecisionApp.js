import React from 'react'

import AddOption from './AddOption'
import Header from './Header'
import Action from './Action'
import Options from './Options'
import Option from './Option'
import RemoveOptions from './RemoveOptions'
import OptionModal from './OptionModal'

export default class IndecisionApp extends React.Component {
  // Set initial state
  state = {
    options: this.props.options,
    selectedOption: undefined
  }

  // Event listeners
  handlePick = () => {
    let num = Math.floor(Math.random() * this.state.options.length)
    this.setState(() => ({
      selectedOption: this.state.options[num]
    }))
  }
  handleAddOption = (option) => {
    if (!option) {
      return 'Enter valid value to add item'
    } else if (this.state.options.indexOf(option) > -1) {
      return 'Option already exists!'
    }
    this.setState((prevState) => ({
      options: prevState.options.concat(option)
    }))
  }
  handleDeleteOption = (optionToRemove) => {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => {
        return optionToRemove !== option
      })
    }))
  }
  handleDeleteOptions = () => {
    this.setState(() => ({
      options: []
    }))
  }
  closeModal = () => {
    this.setState(() => ({
      selectedOption: null
    }))
  }

  // Lifecycle functions
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

  // Template
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
        <OptionModal
          selectedOption={this.state.selectedOption}
          closeModal={this.closeModal}
        />
      </div>
    )
  }
}

IndecisionApp.defaultProps = {
  options: ['ok']
}
