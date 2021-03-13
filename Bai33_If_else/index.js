// function tossCoin() {
//     var b = Math.random();
//     if(b < 0.5){
//         console.log("Mặt sấp");
//     }
//     else{
//         console.log("Mặt ngửa");
//     }
// }
// tossCoin();

function countBill(bills){
    var totals = 0;
    for(var bill of bills){
        if(!bill.fake){
            totals += bill.value;
        }
        else{
            console.log('Co tien gia: ', bill);
            break;
        }        
    }
    return totals;
};

var bills = [
    {value: 10000},
    {value: 20000},
    {value: 50000},
    {value: 100000, fake: true},
    {value: 200000}
];

var b = countBill(bills);
console.log(b);