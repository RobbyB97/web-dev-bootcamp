import React from 'react'
import {Link} from 'react-router-dom'

const ExpenseListItem = ({id, description, amount, createdAt}) => (
  <div>
    <h6>{description}</h6>
    <p>{amount} | {createdAt}</p>
    
    <Link to={`/edit/${id}`}>
        Edit Expense
    </Link>

  </div>
)

export default ExpenseListItem
