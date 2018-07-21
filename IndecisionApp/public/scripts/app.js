'use strict';

console.log('App.js is running');

var app = {
  title: 'Indecision App',
  subtitle: 'Help with indecision',
  options: ['One', 'Two']
};

var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h2',
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
    app.options && app.options.length > 0 ? 'You have options:' : 'No options available'
  ),
  React.createElement(
    'ol',
    null,
    React.createElement(
      'li',
      null,
      'Item1'
    ),
    React.createElement(
      'li',
      null,
      'Item2'
    )
  )
);
//var appRoot = document.getElementById('app');
//ReactDOM.render(template, appRoot);
//------------------------------

var user = {
  name: 'Carl',
  age: 47,
  location: 'Essex'
};
function getLocation(location) {

  if (location != undefined) {
    return React.createElement(
      'p',
      null,
      'Location: ',
      location
    );
  } else {
    // Dropping the else will simply display nothing if location is null
    return React.createElement(
      'p',
      null,
      'Location: UNKNOWN'
    );
  }
};

var templateTwo = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    user.name ? user.name : 'Anonymous'
  ),
  user.age && user.age >= 18 && React.createElement(
    'p',
    null,
    'Age: ',
    user.age + ' years old'
  ),
  getLocation(user.location)
);

var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);
