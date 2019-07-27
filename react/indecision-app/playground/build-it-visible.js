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

const render = () => {
  const template = (
    <div>
      <h1>Visibility Toggle</h1>
      <button onClick={onBtnClick}>{visible ? 'Hide details':'Show details'}</button>
      <p>{visible ? "":"Here are some more details m8"}</p>
    </div>
  )
  ReactDOM.render(template, $appRoot)
}

render()
