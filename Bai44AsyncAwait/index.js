var fs = require('fs');

function readFilePrimose(path) {
    return new Promise(function(resolve, reject) {
        fs.readFile(path, { encoding: 'utf8' }, function(err, dt) {
            if (err) {
                reject(err);
            } else {
                resolve(dt);
            }
        });
    });
}

async function run() {
    var song1 = await readFilePrimose('song1.txt');
    var song2 = await readFilePrimose('song2.txt');
    return [song1, song2];
}

run().then(function(data) {
    console.log(data);
}).catch(function(err) {
    console.log(err);
})