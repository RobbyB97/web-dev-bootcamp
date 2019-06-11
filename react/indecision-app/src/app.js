console.log('app.js is running')

const template = (
  <div>
    <h1>JSX h1 tag</h1>
    <p>JSX P tag</p>
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

ReactDOM.render(templateTwo, appRoot)
