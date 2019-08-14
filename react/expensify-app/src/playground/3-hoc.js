console.log('hoc running')

import React from 'react'
import ReactDOM from 'react-dom'

const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>The info is: {props.info}</p>
  </div>
)

const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAdmin && <p>This is personal info</p>}
      <WrappedComponent {...props}/>
    </div>
  )
}

const AdminInfo = withAdminWarning(Info)

ReactDOM.render(<AdminInfo info="Here are details" />, document.getElementById('app'))
