'use strict';

console.log('build-it-visible.js is running..');

var $appRoot = document.getElementById('app');

var visible = 0;

var onBtnClick = function onBtnClick() {
  if (visible === 0) {
    visible = 1;
  } else {
    visible = 0;
  }
  render();
};

var render = function render() {
  var template = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      'Visibility Toggle'
    ),
    React.createElement(
      'button',
      { onClick: onBtnClick },
      'Show details'
    ),
    React.createElement(
      'p',
      null,
      visible === 0 ? "" : "Here are some more details m8"
    )
  );
  ReactDOM.render(template, $appRoot);
};

render();
