import React from 'react'

const ExpenseEdit = (props) => {
  console.log(props)
  return (
    <div>
        Editing expense with id of {props.match.params.id}
    </div>
  )
}


export default ExpenseEdit
