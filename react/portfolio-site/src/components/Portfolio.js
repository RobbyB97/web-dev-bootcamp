import React from 'react'
import {Link} from 'react-router-dom'

const Portfolio = (props) => (
  <div>
    <h2>Portfolio</h2>
    <Link to="/portfolio/1">Item one</Link>
    <Link to="/portfolio/2">Item two</Link>
    <Link to="/portfolio/3">Item three</Link>
  </div>
)


export default Portfolio
