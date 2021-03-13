function tossCoin() {
    var b = Math.random();
    var result = (b < 0.5) ? result = "Mặt sấp" : result = "Mặt ngửa";

    console.log(result);
}
tossCoin();