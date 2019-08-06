import React from 'react'
import ReactDOM from 'react-dom'
import 'normalize.css/normalize.css'
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom'

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

const NotFoundPage = () => (
  <div>
    404 - <Link to="/">Go Home</Link>
  </div>
)

const Header = () => (
  <header>
    <h1>Expensify</h1>
    <Link to="/">Home</Link>
    <Link to="/create">Create</Link>
    <Link to="/edit">Edit</Link>
    <Link to="/help">Help</Link>
  </header>
)


// Routes
const routes = (
  <BrowserRouter>
    <div>
      <Header/>
      <Switch>
        <Route path="/" component={ExpenseDashboard} exact={true}/>
        <Route path="/create" component={ExpenseDashboardCreate} exact={true}/>
        <Route path="/edit" component={EditPage}/>
        <Route path="/help" component={HelpPage}/>
        <Route component={NotFoundPage}/>
      </Switch>
    </div>
  </BrowserRouter>
)


ReactDOM.render(routes, $appRoot)
