
// Components
class IndecisionApp extends React.Component {
  render() {
    const title = 'Indecision'
    const subtitle = 'Put your life in the hands of a computer!'
    const options = ['Thing one', 'Thing two', 'Thing three']

    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action />
        <Options options={options} />
        <AddOption />
        <RemoveOptions />
      </div>
    )
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    )
  }
}

class Action extends React.Component {
  handlePick() {
    console.log('handlePick called')
  }
  render() {
    return (
      <div>
        <button onClick={this.handlePick}>Who's job is it?</button>
      </div>
    )
  }
}

class Options extends React.Component {
  render() {
    return (
      <div>
        {this.props.options.length}
        {this.props.options.map((option) => {
          return <Option option={option} key={option} />
        })}
      </div>
    )
  }
}

class Option extends React.Component {
  render() {
    return (
      <p>Option: {this.props.option}</p>
    )
  }
}

class AddOption extends React.Component {
  render() {
    return (
      <div>
        AddOption Component
      </div>
    )
  }
}

class RemoveOptions extends React.Component {
  onRemoveOptions() {
    console.log('onRemoveOptions called')
  }
  render() {
    return (
      <div>
        <button onClick={this.onRemoveOptions}>Delete Options</button>
      </div>
    )
  }
}


// Variables
const $appRoot = document.getElementById('app')


ReactDOM.render(<IndecisionApp />, $appRoot)
