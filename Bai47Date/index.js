// function printElapsedTime(fTest) {
//     var nStartTime = Date.now(),
//         vReturn = fTest(),
//         nEndTime = Date.now();

//     console.log('Elapsed time: ' + String(nEndTime - nStartTime) + ' milliseconds');
//     return vReturn;
// }

// var yourFunctionReturn = printElapsedTime(yourFunction);
// let date = new Date(2016, 1, 28);
// date.setDate(date.getDate() + 2);
// let date = new Date();
// date.setSeconds(date.getSeconds() + 70);

// console.log(date);
// let start = new Date(); // start measuring time

// // do the job
// for (let i = 0; i < 100000000; i++) {
//     let doSomething = i * i * i;
// }

// let end = new Date(); // end measuring time

// console.log(`The loop took ${end - start} ms`);
// var date = new Date("06/10/2019")

// function subtractDays(date, n) {
//     // Write code here...
//     console.log(date.setDate(date.getDate() - n));
// }
// subtractDays(date, 5);
var moment = require('moment');
var now = moment('2021-03-13 22:15', 'YYYY-MM-DD hh:mm:ss');

console.log(now.fromNow());