
// Components
class IndecisionApp extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Action />
        <Options />
        <AddOption />
      </div>
    )
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>Indecision</h1>
        <h2>Put your life in the hands of a computer.</h2>
      </div>
    )
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

class Options extends React.Component {
  render() {
    return <p>Options class</p>
  }
}

class AddOption extends React.Component {
  render() {
    return <p>AddOption Class</p>
  }
}


// Variables
const $appRoot = document.getElementById('app')


// JSX
const jsx = (
    <div>
      <h1>Title</h1>
      <IndecisionApp />
    </div>
)


ReactDOM.render(jsx, $appRoot)
