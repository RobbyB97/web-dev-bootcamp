import React from 'react'

const Option = (props) => (
    <div className="option">
      {props.option}
      <button
        onClick={(e) => {
          props.handleDeleteOption(props.option)
        }}
      >
        Remove option
      </button>
    </div>
)

export default Option
