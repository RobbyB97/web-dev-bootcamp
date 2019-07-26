'use strict';

console.log('app.js is running');

// Variables
var app = {
  title: 'Indecision App',
  subtitle: 'Some info',
  options: []
};
var user = {
  name: 'Rob',
  age: 19,
  location: 'Willimantic'
};

var $appRoot = document.getElementById('app');

var numbers = [5, 11, 22, 60];

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
  var option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
    console.log(app.options);
  }

  render();
};

var wipeOptions = function wipeOptions() {
  app.options = [];
  render();
};

// Render Functions
var render = function render() {
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
      'p',
      null,
      app.options.length
    ),
    React.createElement(
      'button',
      { onClick: wipeOptions },
      'Delete Options'
    ),
    numbers.map(function (number) {
      return React.createElement(
        'p',
        { key: number },
        'Number: ',
        number * 2
      );
    }),
    React.createElement(
      'ol',
      null,
      app.options.map(function (option) {
        return React.createElement(
          'li',
          { key: option },
          option
        );
      })
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
  ReactDOM.render(template, $appRoot);
};

// Script
render();
