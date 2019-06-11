'use strict';

console.log('app.js is running');

var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    'JSX h1 tag'
  ),
  React.createElement(
    'p',
    null,
    'JSX P tag'
  )
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
