var readlineSync = require('readline-sync');

var pet = {};

var name = readlineSync.question('Ten pet cua ban: ');
var gender = readlineSync.question('Gioi tinh cua pet: ');
var weight = readlineSync.question('Can nang cua pet: ');

pet.name = name;
pet.gender = gender;
pet.weight = parseInt(weight);

console.log(pet);