import React from 'react'
import ReactDOM from 'react-dom'
import 'normalize.css/normalize.css'
import {BrowserRouter, Route} from 'react-router-dom'

import './sass/main.scss'


// Variables
const $appRoot = document.getElementById('app')


const ExpenseDashboard = () => (
  <div>
    This is from my dashboard component
  </div>
)

// Routes
const routes = (
  <BrowserRouter>
    <Route path="/" component={ExpenseDashboard}/>
  </BrowserRouter>
)


ReactDOM.render(routes, $appRoot)
