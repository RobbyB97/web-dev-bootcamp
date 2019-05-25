import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person'

const App = props => {
  const [ personsState, setPersonsState ] = useState({
    persons: [
      {name: 'Dude', age: 53},
      {name: 'OMG', age: 1337},
      {name: 'NO WHEY', age: 5043}
    ]
  });
  const [ otherState, setOtherState ] = useState('Bro Rick and Morty sucks tbh...');
  //state = {
  //  persons: [
  //    {name: 'Dude', age: 53},
  //    {name: 'OMG', age: 1337},
  //    {name: 'NO WHEY', age: 5043}
  //  ],
  //}

  console.log(personsState, otherState);

  const switchNameHandler = () => {
    //alert('OMG I BEEN CLIKT!')
    setPersonsState({
      persons: [
        ...personsState.persons,
        {name: 'Dude', age: 90},
        {name: 'BRO', age: 53},
        //{name: 'OMG', age: 1337},
        //{name: 'NO WHEY', age: 5043}
      ]
    });
  }

  return (
    <div className="App">
      <h1> Im a React App </h1>
      <p> It is working! </p>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>I like trains</Person>
    </div>
  );
}

export default App;
