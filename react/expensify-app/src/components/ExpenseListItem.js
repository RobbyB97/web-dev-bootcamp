import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

import {removeExpense} from '../actions/expenses.js'

const ExpenseListItem = ({id, dispatch, description, amount, createdAt}) => (
  <div>
    <h6>{description}</h6>
    <p>{amount} | {createdAt}</p>
    
    <Link to={`/edit/${id}`}>
        Edit Expense
    </Link>
    
    <button onClick={() => {
      dispatch(removeExpense({id}))
    }}> 
        Remove Expense 
    </button>

  </div>
)

export default connect()(ExpenseListItem)
