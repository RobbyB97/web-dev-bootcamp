import React from 'react'
import Option from './option'

const Options = (props) => {
  return (
    <div>
      {props.options.length === 0 && <p>Add an option to get started!</p>}
      {props.options.map((option) => (
        <Option
          key={option}
          option={option}
          handleDeleteOption={props.handleDeleteOption}
        />
      ))}
    </div>
  )
}

export default Options
