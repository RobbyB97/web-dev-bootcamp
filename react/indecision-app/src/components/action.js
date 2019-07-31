import React from 'react'

const Action = (props) => {
  return (
    <div>
      <button disabled={props.hasOptions} onClick={props.handlePick}>Who's job is it?</button>
    </div>
  )
}

export default Action
