var memCard = {
    tier: "silver",
};

function getTotal(price, card) {
    var discontRate;
    switch (card.tier) {
        case 'bronze':
            discontRate = 0.02;
            break;
        case 'silver':
            discontRate = 0.05;
            break;
        case 'gold':
            discontRate = 0.08;
            break;
        default:
            discontRate = 0.1;

    }
    // if (card.tier === "bronze") {
    //     discontRate = 0.02;
    // } else if (card.tier === "silver") {
    //     discontRate = 0.05;
    // } else if (card.tier === "gold") {
    //     discontRate = 0.08;
    // } else {
    //     discontRate = 1;
    // }
    return price * (1 - discontRate);
}

var totals = getTotal(500000, memCard);
console.log(totals);