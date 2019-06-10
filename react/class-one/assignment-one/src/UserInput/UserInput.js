import React from 'react'
import './UserInput.css'

const userInput = (props) => {
  const styles = {
    width: '40%',
    margin: 'auto',
    padding: '2px',
    height: '30px'
  }
  return (
    <div className="UserInput">
      <input
        styles={styles}
        type="text"
        onClick={() => props.click}
        onChange={props.changed}
        value={props.name}
      />
      <button onClick={() => props.click} />
    </div>
  )
}

export default userInput
