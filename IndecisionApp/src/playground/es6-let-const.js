var nameVar = 'Carl';
var nameVar = 'Last';
console.log('nameVar', nameVar);

let nameLet = 'Sharon';
nameLet = 'Last';
console.log('nameLet',nameLet);

const nameConst = 'Yvette';

console.log('nameConst',nameConst);

// Block Scoping
const fullName = 'Carl Last';
let firstName;
if (fullName) {
  firstName = fullName.split(' ')[0];
  console.log('firstName',firstName);
}

console.log('firstName', firstName);
