
// Components
class IndecisionApp extends React.Component {
  constructor(props) {
    super(props)
    this.handleAddOption = this.handleAddOption.bind(this)
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
    this.handlePick = this.handlePick.bind(this)
    this.state = {
      options: ['Thing one', 'Thing two', 'Thing three']
    }
  }
  handlePick() {
    let num = Math.floor(Math.random() * this.state.options.length)
    return alert(this.state.options[num])
  }
  handleAddOption(option) {
    this.setState((prevState) => {
      return {
        options: prevState.options.concat(option)
      }
    })
  }
  handleDeleteOptions() {
    this.setState(() => {
      return {
        options: []
      }
    })
  }
  render() {
    const title = 'Indecision'
    const subtitle = 'Put your life in the hands of a computer!'

    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action
          hasOptions={this.state.options.length === 0}
          handlePick={this.handlePick}
        />
        <Options
          options={this.state.options}
        />
        <AddOption
          handleAddOption={this.handleAddOption}
        />
        <RemoveOptions
          handleDeleteOptions={this.handleDeleteOptions}
        />
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
  render() {
    return (
      <div>
        <button disabled={this.props.hasOptions} onClick={this.props.handlePick}>Who's job is it?</button>
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
  constructor(props) {
    super(props)
    this.onFormSubmit = this.onFormSubmit.bind(this)
  }
  onFormSubmit(e) {
    e.preventDefault()
    const option = e.target.elements.option.value.trim()
    e.target.elements.option.value = ''
    if (option) {
      this.props.handleAddOption(option)
    }
    console.log('On Form Submit')
  }
  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input type="text" name="option"/>
          <button>Add Option</button>
        </form>
      </div>
    )
  }
}

class RemoveOptions extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.props.handleDeleteOptions}>Delete Options</button>
      </div>
    )
  }
}


// Variables
const $appRoot = document.getElementById('app')


ReactDOM.render(<IndecisionApp />, $appRoot)
