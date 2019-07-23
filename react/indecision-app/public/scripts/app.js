'use strict';

console.log('app.js is running');

// Variables
var app = {
  title: 'Indecision App',
  subtitle: 'Some info',
  options: ['One', 'Two']
};
var user = {
  name: 'Rob',
  age: 19,
  location: 'Willimantic'
};
var count = 0;

// Functions
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
var addOne = function addOne() {
  count++;
  renderCounterApp();
};
var minusOne = function minusOne() {
  count--;
  renderCounterApp();
};
var resetCount = function resetCount() {
  count = 0;
  renderCounterApp();
};

// Templates
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

// Render app
var appRoot = document.getElementById('app');
//ReactDOM.render(countTemplate, appRoot)
var renderCounterApp = function renderCounterApp() {
  var countTemplate = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      'Count: ',
      count
    ),
    React.createElement(
      'button',
      { onClick: addOne },
      '+1'
    ),
    React.createElement(
      'button',
      { onClick: minusOne },
      '-1'
    ),
    React.createElement(
      'button',
      { onClick: resetCount },
      'Reset'
    )
  );

  ReactDOM.render(countTemplate, appRoot);
};

renderCounterApp();
