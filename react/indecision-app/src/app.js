import React from 'react'
import ReactDOM from 'react-dom'


// Import components
import Header from './components/Header'
import IndecisionApp from './components/IndecisionApp'


// Variables
const $appRoot = document.getElementById('app')


ReactDOM.render(<IndecisionApp />, $appRoot)
