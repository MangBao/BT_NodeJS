var fs = require('fs');

var text = fs.readFileSync('../11_30Node_built_in_module/testNode.txt', { encoding: 'utf-8' });
console.log(text);
fs.writeFileSync('../11_30Node_built_in_module/testNode_2.txt', 'I\'m Mang Bảo');