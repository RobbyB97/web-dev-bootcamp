import React from 'react'
import './UserOutput.css'

const userOutput = (props) => {
  return (
    <div className="UserOutput">
      <p onChange={props.changed}>{props.name}</p>
      <p>
        COME ON MAN :(
      </p>
    </div>
  )
}

export default userOutput
