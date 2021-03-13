function countFrom(a, b) {

    return new Promise((resolve, reject) => {
        var id = setInterval(() => {
            console.log(a);
            a++;
            if (a > b) {
                clearInterval(id);
                resolve();
            }

        }, 1000);

    });
}
countFrom(1, 10).then(function() {
    console.log('Hello World');
});