console.log('App.js is running');

let app = {
  title: 'Indecision App'
  ,subtitle: 'Help with indecision'
  ,options: ['One', 'Two']
};

const template = (
  <div>
    <h2>{app.title}</h2>
    {app.subtitle && <p>{app.subtitle}</p>}
    <p>{(app.options && app.options.length > 0) ? 'You have options:' : 'No options available'}</p>
    <ol>
      <li>Item1</li>
      <li>Item2</li>
    </ol>
  </div>
);

let user = {
  name: 'Carl',
  age: 47,
  location: 'Essex'
};

function getLocation(location) {
  if (location != undefined) {
    return <p>Location: {location}</p>;
  } else { // Dropping the else will simply display nothing if location is null
    return <p>Location: UNKNOWN</p>;
  }
};

const templateTwo = (
  <div>
    <h1>{user.name ? user.name : 'Anonymous'}</h1>
    {(user.age && user.age >= 18) && <p>Age: {user.age + ' years old'}</p>}
    {getLocation(user.location)}
  </div>
);

const appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);
