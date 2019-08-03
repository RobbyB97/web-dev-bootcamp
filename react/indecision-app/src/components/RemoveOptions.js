import React from 'react'


const RemoveOptions = (props) => (
    <div>
      <button
        className="big-button"
        onClick={props.handleDeleteOptions}
      >
        Delete Options
      </button>
    </div>
)

export default RemoveOptions
