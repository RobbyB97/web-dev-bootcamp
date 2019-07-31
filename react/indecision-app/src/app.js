import React from 'react'
import ReactDOM from 'react-dom'


// Import components
import AddOption from './components/addOption'
import Header from './components/header'
import Action from './components/action'
import Options from './components/options'
import Option from './components/option'
import RemoveOptions from './components/removeOptions'
import IndecisionApp from './components/indecisionApp'

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
