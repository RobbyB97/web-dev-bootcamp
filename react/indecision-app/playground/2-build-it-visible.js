console.log('build-it-visible.js is running..')


const $appRoot = document.getElementById('app')

let visible = 0

const onBtnClick = () => {
  if (visible === 0) {
    visible = 1
  } else {
    visible = 0
  }
  render()
}

class ToggleVisibility extends React.Component {
  constructor(props) {
    super(props)
    this.onToggle = this.onToggle.bind(this)
    this.state = {
      visibility: false
    }
  }
  onToggle() {
    console.log('onToggle')
  }
  render() {
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.onToggle}>{this.state.visibility ? 'Hide details':'Show details'}</button>
        <p>{this.state.visibility ? 'Here are some more details!':''}</p>
      </div>
    )
  }
}

const render = () => {
  const template = (
    <div>
      <h1>Visibility Toggle</h1>
      <button onClick={onBtnClick}>{visible ? 'Hide details':'Show details'}</button>
      <p>{visible ? "":"Here are some more details m8"}</p>
    </div>
  )
  ReactDOM.render(<ToggleVisibility />, $appRoot)
}

render()
