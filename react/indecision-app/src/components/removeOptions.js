import React from 'react'


const RemoveOptions = (props) => {
  return (
    <div>
      <button onClick={props.handleDeleteOptions}>Delete Options</button>
    </div>
  )
}

export default RemoveOptions
