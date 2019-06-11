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

var user = {
  name: 'Rob',
  age: 22,
  location: 'Willimantic'
};

var templateTwo = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    ' ',
    user.name.toUpperCase() + '!',
    ' '
  ),
  React.createElement(
    'p',
    null,
    ' Age: ',
    user.age,
    ' '
  ),
  React.createElement(
    'p',
    null,
    ' Location: ',
    user.location,
    ' '
  )
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
