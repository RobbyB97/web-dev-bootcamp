import React from 'react'


const RemoveOptions = (props) => (
    <div>
      <button
        className="big-button"
        onClick={props.handleDeleteOptions}
        disabled={props.hasOptions}
      >
        Delete Options
      </button>
    </div>
)

export default RemoveOptions
