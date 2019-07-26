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

  render()
}

const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length)
  const option = app.options[randomNum]
  console.log(option)
}

const wipeOptions = () => {
  app.options = []
  render()
}


// Render Functions
const render = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{(app.options.length > 0) ? "Here are your options" : "No options"}</p>
      <button onClick={onMakeDecision}>What should I do?</button>
      <button onClick={wipeOptions}>Delete Options</button>
      <ol>
        {
          app.options.map((option) => {
            return <li key={option}>{option}</li>
          })
        }
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
render()
