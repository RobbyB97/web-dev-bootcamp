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

var $appRoot = document.getElementById('app');

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

var onFormSubmit = function onFormSubmit(e) {
  e.preventDefault();
  console.log('Form Submitted');
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
  ),
  React.createElement(
    'form',
    { onSubmit: onFormSubmit },
    React.createElement('input', { type: 'text', name: 'option' }),
    React.createElement(
      'button',
      null,
      'Add Option'
    )
  )
);

// Render App
ReactDOM.render(template, $appRoot);
