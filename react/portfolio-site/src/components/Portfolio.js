import React from 'react'
import {NavLink} from 'react-router-dom'

const Portfolio = (props) => {
  if (props.match.params.id) {
    return (
      <div>
        <h2>Portfolio</h2>
        <NavLink to="/portfolio/1" exact={true}>Item one</NavLink>
        <NavLink to="/portfolio/2" exact={true}>Item two</NavLink>
        <NavLink to="/portfolio/3" exact={true}>Item three</NavLink>

      </div>
    )
  }

  return (
    <div>
      <h2>Portfolio item: {props.match.params.id}</h2>
      <p>Here's some information about {props.match.params.id}.</p>
    </div>
  )
}


export default Portfolio
