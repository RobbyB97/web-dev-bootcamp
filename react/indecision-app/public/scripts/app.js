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
  ),
  React.createElement(
    'ol',
    null,
    React.createElement(
      'li',
      null,
      ' Item one '
    ),
    React.createElement(
      'li',
      null,
      ' Item two '
    )
  )
);

var userName = 'Rob';

var templateTwo = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    ' ',
    userName.toUpperCase() + '!',
    ' '
  ),
  React.createElement(
    'p',
    null,
    ' Age: 22 '
  ),
  React.createElement(
    'p',
    null,
    ' Location: Willimantic '
  )
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
