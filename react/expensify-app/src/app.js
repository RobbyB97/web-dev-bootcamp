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

const EditPage = () => (
  <div>
    This is the edit page
  </div>
)

const HelpPage = () => (
  <div>
    This is the help page
  </div>
)


// Routes
const routes = (
  <BrowserRouter>
    <div>
      <Route path="/" component={ExpenseDashboard} exact={true}/>
      <Route path="/create" component={ExpenseDashboardCreate} exact={true}/>
      <Route path="/edit" component={EditPage}/>
      <Route path="/help" component={HelpPage}/>
    </div>
  </BrowserRouter>
)


ReactDOM.render(routes, $appRoot)
