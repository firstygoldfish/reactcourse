const clog = (msg) => console.log(msg);
// Argumnets object - no longer bound with arrow functions

//const add = function (a, b) {
//  clog(arguments);
//  return a + b;
//}

const add = (a, b) => {
  //clog(arguments);  //arguments not defined in arrow funtions
  return a + b;
}

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

const user = {
  name: 'Carl'
  ,cities:['Grays', 'Dagenham']
  ,printPlacesLived() {
    return this.cities.map((city) => this.name + ' has lived in ' + city);
  }
};

clog(user.printPlacesLived());

const multiplier = {
  numbers:[1, 2, 4]
  ,multiplyBy: 2
  ,multiply() {
    return this.numbers.map((number) => number * this.multiplyBy);
  }
};
clog(multiplier.multiply());
