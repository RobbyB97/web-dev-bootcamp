import React from 'react'
import {connect} from 'react-redux'

import {removeExpense} from '../actions/expenses.js'

const ExpenseListItem = ({id, dispatch, description, amount, createdAt}) => (
  <div>
    <h6>{description}</h6>
    <p>{amount} | {createdAt}</p>
    <button onClick={() => {
      dispatch(removeExpense({id}))
    }}> Remove Expense </button>

  </div>
)

export default connect()(ExpenseListItem)
