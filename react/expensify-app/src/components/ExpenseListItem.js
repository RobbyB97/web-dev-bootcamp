import React from 'react'

const ExpenseListItem = (props) => (
  <div>
    <h6>{props.description}</h6>
    <p>{props.amount}</p>
    <p>{props.createdAt}</p>
  </div>
)

export default ExpenseListItem
