// var pfs = require("promise-fs");

// function onDone(song) {
//     console.log(song);
// }

// function Error(err) {
//     console.log(err);
// }

// function readFile(path) {
//     return pfs.readFile(path, { encoding: 'utf8' });
// }

// readFile('song1.txt')
//     .then(onDone)
//     .then(function() {
//         return readFile('song2.txt')
//     })
//     .then(onDone)
//     .catch(Error);

var fs = require('promise-fs');

function readFilePromise(path) {
    return new Promise(function(resolve, reject) {
        fs.readFile(path, { encoding: 'utf8' }, function(err, data) {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
}

readFilePromise('song3.txt').then(function(song) {
    console.log(song);
}).catch(function(err) {
    console.log(err);
});