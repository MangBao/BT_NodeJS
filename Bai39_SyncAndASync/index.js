var fs = require('fs');

// console.log('Start');
// var song1 = fs.readFileSync('song1.txt', { encoding: 'utf-8' });
// var song2 = fs.readFileSync('song2.txt', { encoding: 'utf-8' });
// console.log('End');

console.log('Start');
var song1 = fs.readFile('song1.txt', { encoding: 'utf-8' }, function(err, data){

});
var song2 = fs.readFile('song2.txt', { encoding: 'utf-8' }, function(err, data){

});
console.log('End');
``