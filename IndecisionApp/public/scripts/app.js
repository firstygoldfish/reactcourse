'use strict';

var clog = function clog(msg) {
  return console.log(msg);
};
// Argumnets object - no longer bound with arrow functions

//const add = function (a, b) {
//  clog(arguments);
//  return a + b;
//}

var add = function add(a, b) {
  //clog(arguments);  //arguments not defined in arrow funtions
  return a + b;
};

//clog('17 + 30 = ' + add(17,30,1001));

// this keyword - no longer bound

/*const user = {
  name: 'Carl'
  ,cities:['Grays', 'Dagenham']
  ,printPlacesLived: function () {
    clog(this.name);
    clog(this.cities);

    this.cities.forEach(function (city) {
      clog(this.name + ' has lived in ' + city);
    });
  }
};*/

/*const user = {
  name: 'Carl'
  ,cities:['Grays', 'Dagenham']
  ,printPlacesLived: function () {
    this.cities.forEach((city) => {
      clog(this.name + ' has lived in ' + city); //function uses 'this' from parent (GOOD THING)
    });
  }
};*/

var user = {
  name: 'Carl',
  cities: ['Grays', 'Dagenham'],
  printPlacesLived: function printPlacesLived() {
    var _this = this;

    return this.cities.map(function (city) {
      return _this.name + ' has lived in ' + city;
    });
  }
};

clog(user.printPlacesLived());

var multiplier = {
  numbers: [1, 2, 4],
  multiplyBy: 2,
  multiply: function multiply() {
    var _this2 = this;

    return this.numbers.map(function (number) {
      return number * _this2.multiplyBy;
    });
  }
};
clog(multiplier.multiply());
