import React from 'react'
import ReactDOM from 'react-dom'
import 'normalize.css/normalize.css'
import './sass/main.scss'
import AppRouter from './routers/AppRouter'


// Variables
const $appRoot = document.getElementById('app')


ReactDOM.render(<AppRouter />, $appRoot)
