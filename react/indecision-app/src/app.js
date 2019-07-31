import React from 'react'
import ReactDOM from 'react-dom'


// Import components
import AddOption from './components/AddOption'
import Header from './components/Header'
import Action from './components/Action'
import Options from './components/Options'
import Option from './components/Option'
import RemoveOptions from './components/RemoveOptions'
import IndecisionApp from './components/IndecisionApp'

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
