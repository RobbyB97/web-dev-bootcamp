'use strict';

console.log('app.js is running');

var app = {
  title: 'Indecision App',
  subtitle: 'Some info',
  options: ['One', 'Two']
};

var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    app.title
  ),
  app.subtitle && React.createElement(
    'p',
    null,
    app.subtitle
  ),
  React.createElement(
    'p',
    null,
    app.options.length > 0 ? "Here are your options" : "No options"
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
  age: 19,
  location: 'Willimantic'
};

var getLocation = function getLocation(location) {
  if (location) {
    return React.createElement(
      'p',
      null,
      ' Location: ',
      location,
      ' '
    );
  }
};

var templateTwo = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    ' ',
    user.name ? user.name : 'Anonymous',
    ' '
  ),
  user.age && user.age >= 18 && React.createElement(
    'p',
    null,
    ' Age: ',
    user.age,
    ' '
  ),
  getLocation(user.location)
);

var count = 0;
var countTemplate = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    'Count: ',
    count
  )
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
