// Libraries
import React from 'react'
import ReactDOM from 'react-dom'
import 'normalize.css/normalize.css'

// Assets
import './sass/main.scss'
import AppRouter from './routers/AppRouter'
import {configureStore, getVisibleExpenses} from './store/configureStore'
import {addExpense, removeExpense, editExpense} from './actions/expenses'
import {setStartDate, setEndDate, setTextFilter, sortByDate, sortByAmount} from './actions/filters'

// Variables
const $appRoot = document.getElementById('app')

// Set up redux store
const store = configureStore()
store.subscribe(() => {
  const state = store.getState()
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
  console.log(visibleExpenses)
})

console.log(store.getState())
store.dispatch(addExpense({description: 'Water bill', amount: 450}))
store.dispatch(addExpense({description: 'Gas bill', amount: 400}))
store.dispatch(setTextFilter('bill'))
store.dispatch(setTextFilter('water'))

ReactDOM.render(<AppRouter />, $appRoot)
