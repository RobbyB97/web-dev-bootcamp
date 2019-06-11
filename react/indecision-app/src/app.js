console.log('app.js is running')

let template = (
  <div>
    <h1>JSX h1 tag</h1>
    <p>JSX P tag</p>
    <ol>
      <li> Item one </li>
      <li> Item two </li>
    </ol>
  </div>
)

const appRoot = document.getElementById('app')

ReactDOM.render(template, appRoot)
