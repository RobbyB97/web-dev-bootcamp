import React from 'react'
import Option from './Option'

const Options = (props) => (
    <div>
      {props.options.length === 0 && <p className="message">Add an option to get started!</p>}
      {props.options.map((option) => (
        <Option
          key={option}
          option={option}
          handleDeleteOption={props.handleDeleteOption}
        />
      ))}
    </div>
)

export default Options
