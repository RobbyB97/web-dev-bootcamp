import React from 'react'

const PortfolioItem = (props) => (
  <div>
    <h2>Portfolio item: {props.match.params.id}</h2>
    <p>Here's some information about {props.match.params.id}.</p>
  </div>
)


export default PortfolioItem
