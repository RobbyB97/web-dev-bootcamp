
// Components
class Header extends React.Component {
  render() {
    return <p>This is a header component.</p>
  }
}


// Variables
const $appRoot = document.getElementById('app')


// JSX
const jsx = (
    <div>
      <h1>Title</h1>
      <Header/>
    </div>
)


ReactDOM.render(jsx, $appRoot)
