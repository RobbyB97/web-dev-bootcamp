'use strict';

console.log('app.js is running');

var app = {
  title: 'Indecision App',
  subtitle: 'Some info'
};

var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    app.title
  ),
  React.createElement(
    'p',
    null,
    app.subtitle
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

var getLocation = function getLocation(location) {
  if (location) {
    return location;
  } else {
    return 'Who knows?';
  }
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
    getLocation(user.location),
    ' '
  )
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
