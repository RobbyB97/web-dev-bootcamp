console.log('counter-example-states.js')


class Counter extends React.Component {
  onIncrement() {
    console.log('On Increment')
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
        <h1>Count: </h1>
        <button onClick={this.onIncrement}>+1</button>
        <button onClick={this.onDecrement}>-1</button>
        <button onClick={this.onReset}>Reset</button>
      </div>
    )
  }
}

ReactDOM.render(<Counter />, document.getElementById('app'))
