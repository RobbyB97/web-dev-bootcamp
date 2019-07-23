console.log('app.js is running')


// Variables
const app = {
  title: 'Indecision App',
  subtitle: 'Some info',
  options: ['One', 'Two']
}
const user = {
  name: 'Rob',
  age: 19,
  location: 'Willimantic'
}
let count = 0



// Functions
const getLocation = location => {
  if (location) {
    return <p> Location: {location} </p>
  }
}
const addOne = () => {
  console.log('Add One')
}
const minusOne = () => {
  console.log('Minus One')
}

// Templates
const template = (
  <div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    <p>{(app.options.length > 0) ? "Here are your options" : "No options"}</p>
    <ol>
      <li> Item one </li>
      <li> Item two </li>
    </ol>
  </div>
)

const templateTwo = (
  <div>
    <h1> {user.name ? user.name : 'Anonymous'} </h1>
    {(user.age && user.age >= 18) && <p> Age: {user.age} </p>}
    {getLocation(user.location)}
  </div>
)

const countTemplate = (
  <div>
    <h1>Count: {count}</h1>
    <button onClick={addOne}>+1</button>
  </div>
)


// Render app
const appRoot = document.getElementById('app')
ReactDOM.render(countTemplate, appRoot)
