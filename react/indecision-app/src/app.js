
// Components
class Header extends React.Component {
  render() {
    return <p>This is a header component.</p>
  }
}

class Action extends React.Component {
  render() {
    return (
      <div>
        <button>Who's job is it?</button>
      </div>
    )
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
