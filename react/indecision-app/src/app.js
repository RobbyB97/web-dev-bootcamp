console.log('app.js is running')

const app = {
  title: 'Indecision App',
  subtitle: 'Some info'
}

const template = (
  <div>
    <h1>{app.title}</h1>
    <p>{app.subtitle}</p>
    <ol>
      <li> Item one </li>
      <li> Item two </li>
    </ol>
  </div>
)

const user = {
  name: 'Rob',
  age: 22,
  location: 'Willimantic'
}

const templateTwo = (
  <div>
    <h1> {user.name.toUpperCase() + '!'} </h1>
    <p> Age: {user.age} </p>
    <p> Location: {user.location} </p>
  </div>
)

const appRoot = document.getElementById('app')

ReactDOM.render(template, appRoot)
