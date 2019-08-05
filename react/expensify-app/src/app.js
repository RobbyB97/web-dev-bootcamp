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

const ExpenseDashboardCreate = () => (
  <div>
    This is from my dashboard create component
  </div>
)

// Routes
const routes = (
  <BrowserRouter>
    <div>
      <Route path="/" component={ExpenseDashboard}/>
      <Route path="/create" component={ExpenseDashboardCreate}/>
    </div>
  </BrowserRouter>
)


ReactDOM.render(routes, $appRoot)
