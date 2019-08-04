import React from 'react'

const Option = (props) => (
    <div className="option">
      <p className="option__text">{props.count}. {props.option}</p>
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
