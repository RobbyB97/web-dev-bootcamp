import React from 'react'
import ReactDOM from 'react-dom'
import 'normalize.css/normalize.css'
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom'

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
    <NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink>
    <NavLink to="/create" activeClassName="is-active">Create</NavLink>
    <NavLink to="/edit" activeClassName="is-active">Edit</NavLink>
    <NavLink to="/help" activeClassName="is-active">Help</NavLink>
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
