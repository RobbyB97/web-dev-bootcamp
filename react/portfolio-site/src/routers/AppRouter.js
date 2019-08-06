//Libraries
import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

//Components
import Header from '../components/Header'
import Home from '../components/Home'
import NotFoundPage from '../components/NotFoundPage'
import Contact from '../components/Contact'
import Portfolio from '../components/Portfolio'

// Routes
const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header/>
      <Switch>
        <Route component={NotFoundPage}/>
      </Switch>
    </div>
  </BrowserRouter>
)


export default AppRouter
