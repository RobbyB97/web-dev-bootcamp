import React from 'react';

const person = (props) => {
  return (
    <div>
      <p onClick={props.click}>I am {props.name}! 2 + 2 = {props.age}</p>
      <p>{props.children}</p>
    </div>
  );
}

export default person;
