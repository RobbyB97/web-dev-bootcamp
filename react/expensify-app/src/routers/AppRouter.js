//Libraries
import React from 'react'
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom'

//Components
import ExpenseDashboard from '../components/ExpenseDashboard'
import ExpenseCreate from '../components/ExpenseCreate'
import ExpenseHelp from '../components/ExpenseHelp'
import ExpenseEdit from '../components/ExpenseEdit'
import NotFoundPage from '../components/NotFoundPage'


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
const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header/>
      <Switch>
        <Route path="/" component={ExpenseDashboard} exact={true}/>
        <Route path="/create" component={ExpenseCreate} exact={true}/>
        <Route path="/edit" component={ExpenseEdit}/>
        <Route path="/help" component={ExpenseHelp}/>
        <Route component={NotFoundPage}/>
      </Switch>
    </div>
  </BrowserRouter>
)


export default AppRouter
