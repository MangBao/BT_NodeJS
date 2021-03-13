var fs = require('fs');
var co = require('co');


function readFilePrimose(path) {
    return new Promise(function(resolve, reject) {
        fs.readFile(path, { encoding: 'utf8' }, function(err, dt) {
            if (err) {
                reject(err);
            } else {
                resolve(dt);
            }
        })
    })
}

// co(function*() {
//     // var song1 = yield readFilePrimose('./song1.txt');
//     // var song2 = yield readFilePrimose('./song2.txt');
//     var values = yield [
//         readFilePrimose('./song1.txt'),
//         readFilePrimose('./song2.txt')
//     ];
//     return values;
// }).then(function(values) {
//     console.log(values);
// }).catch(function(err) {
//     console.log(err);
// })

var readFile = co.wrap(function*(files) {
    //[String] -> [Promise]
    var values = yield files.map(function(file) {
        return readFilePrimose(file);
    });
    return values;
});
readFile(['song1.txt', 'song2.txt']).then(function(values) {
    console.log(values);
})