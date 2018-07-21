const square = function(x) {
  return x * x;
};

//const squareArrow = (x) => {
//  return x * x;
//};

//const clog = (msg) => {
//  console.log(msg);
//};

const clog = (msg) => console.log(msg);

const squareArrow = (x) => x * x;

//clog('8 squared = ' + squareArrow(8));

//console.log('squared',squareArrow(8),squareArrow(8));
let fullName = 'Carl Last';
//const getFirstName = (name) => {
//  return name.split(' ')[0];
//};
const getFirstName = (name) => name.split(' ')[0];

clog('First Name of ' + fullName + ' is ' + getFirstName(fullName));
