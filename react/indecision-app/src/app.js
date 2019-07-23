console.log('app.js is running')


// Variables
const app = {
  title: 'Indecision App',
  subtitle: 'Some info',
  options: []
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

const onFormSubmit = e => {
  e.preventDefault()
  const option = e.target.elements.option.value

  if (option) {
    app.options.push(option)
    e.target.elements.option.value = ''
    console.log(app.options)
  }

  renderCounterApp()
}


// Templates


// Render Functions
const renderCounterApp = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{(app.options.length > 0) ? "Here are your options" : "No options"}</p>
      <p>{app.options.length}</p>
      <ol>
        <li> Item one </li>
        <li> Item two </li>
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option"/>
        <button>Add Option</button>
      </form>
    </div>
  )
  ReactDOM.render(template, $appRoot)
}

// Script
renderCounterApp()
