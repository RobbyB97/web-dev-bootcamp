import React from 'react'
import './CharBox.css'

const charBox = (props) => {
  return (
    <div className="CharBox">
      {props.char}
    </div>
  )
}

export default charBox
