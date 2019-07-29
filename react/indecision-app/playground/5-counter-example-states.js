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
  componentDidMount() {
    try {
      const json = localStorage.getItem('count')
      const count = JSON.parse(json)
      if (count) {
        this.setState(() => ({count}))
        console.log('Got count from local storage.')
      }
    } catch(e) {
      console.log('Invalid JSON')
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      const json = JSON.stringify(this.state.count)
      localStorage.setItem('count', json)
      console.log('Saving count.')
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

ReactDOM.render(<Counter/>, document.getElementById('app'))
