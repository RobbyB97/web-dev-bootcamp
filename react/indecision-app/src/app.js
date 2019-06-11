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

const userName = 'Rob'

const templateTwo = (
  <div>
    <h1> {userName.toUpperCase() + '!'} </h1>
    <p> Age: 22 </p>
    <p> Location: Willimantic </p>
  </div>
)

const appRoot = document.getElementById('app')

ReactDOM.render(templateTwo, appRoot)
