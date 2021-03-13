var Mouse = require('./mouse');
var Cat = require('./cat')

var Mickey = new Mouse('black');
var Jerry = new Mouse('yellow');

console.log(Mickey);
console.log(Jerry);

var Tom = new Cat();
Tom.eat(Mickey);
Tom.eat(Jerry);
console.log(Tom);