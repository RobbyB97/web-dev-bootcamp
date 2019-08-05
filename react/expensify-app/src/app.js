import React from 'react'
import ReactDOM from 'react-dom'
import 'normalize.css/normalize.css'
import {BrowserRouter, Route} from 'react-router-dom'

import './sass/main.scss'


// Variables
const $appRoot = document.getElementById('app')


// Routes
const routes = (
  <BrowserRouter>

  </BrowserRouter>
)


ReactDOM.render(<p>This is a boilerplate</p>, $appRoot)
