import React from 'react'


const RemoveOptions = (props) => (
    <div className="widget-header">
      <h3>Your Options</h3>
      <button
        className="button button--link"
        onClick={props.handleDeleteOptions}
        disabled={props.hasOptions}
      >
        Delete Options
      </button>
    </div>
)

export default RemoveOptions
