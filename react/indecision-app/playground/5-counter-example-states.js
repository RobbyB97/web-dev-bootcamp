console.log('counter-example-states.js')


class Counter extends React.Component {
  constructor(props) {
    super(props)
    this.onIncrement = this.onIncrement.bind(this)
    this.onDecrement = this.onDecrement.bind(this)
    this.onReset = this.onReset.bind(this)
    this.state = {
      count: 0
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
    console.log('On Decrement')
  }
  onReset() {
    console.log('On Reset')
  }
  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.onIncrement}>+1</button>
        <button onClick={this.onDecrement}>-1</button>
        <button onClick={this.onReset}>Reset</button>
      </div>
    )
  }
}

ReactDOM.render(<Counter />, document.getElementById('app'))
