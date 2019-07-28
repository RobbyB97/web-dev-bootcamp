console.log('counter-example-states.js')


class Counter extends React.Component {
  constructor(props) {
    super(props)
    this.onIncrement = this.onIncrement.bind(this)
    this.onDecrement = this.onDecrement.bind(this)
    this.onReset = this.onReset.bind(this)
    this.state = {
      count: 0,
      title: 'Count: '
    }
  }
  onIncrement() {
    this.setState((prevState) => {
      return {
        count: prevState.count += 1
      }
    })
  }
  onDecrement() {
    this.setState((prevState) => {
      return {
        count: prevState.count -= 1
      }
    })
  }
  onReset() {
    this.setState((prevState) => {
      return {
        count: prevState.count = 0
      }
    })
  }
  render() {
    return (
      <div>
        <h1>{this.state.title}{this.state.count}</h1>
        <button onClick={this.onIncrement}>+1</button>
        <button onClick={this.onDecrement}>-1</button>
        <button onClick={this.onReset}>Reset</button>
      </div>
    )
  }
}

ReactDOM.render(<Counter />, document.getElementById('app'))
