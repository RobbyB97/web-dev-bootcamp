console.log('counter-example-states.js')


class Counter extends React.Component {
  constructor(props) {
    super(props)
    this.onIncrement = this.onIncrement.bind(this)
    this.onDecrement = this.onDecrement.bind(this)
    this.onReset = this.onReset.bind(this)
    this.state = {
      count: props.count,
      title: 'Count: '
    }
  }
  onIncrement() {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1
      }
    })
  }
  onDecrement() {
    this.setState((prevState) => {
      return {
        count: prevState.count - 1
      }
    })
  }
  onReset() {
    this.setState(() => {
      return {
        count: 0
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
Counter.defaultProps = {
  count: 0
}

ReactDOM.render(<Counter/>, document.getElementById('app'))
