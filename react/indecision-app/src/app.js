console.log('app.js is running')

let template = <div><h1>JSX h1 tag</h1><p>JSX P tag</p></div>
const appRoot = document.getElementById('app')

ReactDOM.render(template, appRoot)
