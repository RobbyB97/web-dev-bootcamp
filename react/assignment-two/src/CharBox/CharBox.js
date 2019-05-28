import React from 'react'
import './CharBox.css'

const charBox = (props) => {
  return (
    <div className="CharBox" onClick={props.click}>
      {props.char}
    </div>
  )
}

export default charBox
