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

const $appRoot = document.getElementById('app')


// Functions
const getLocation = location => {
  if (location) {
    return <p> Location: {location} </p>
  }
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


// Render App
reactDOM.render(template, $appRoot)
