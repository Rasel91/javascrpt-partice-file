

//===============> Problem:1  radianToDegree

function radiantodegree(radians) {
    return radians * (180 / Math.PI);
}
const result = radiantodegree(10).toFixed(2);
console.log(result);

//================> Problem:2  isJavaScriptFile 

function isJavaScriptFile(file) {
    const result = loveline.endsWith('.pdf');
    return result;
}
const loveline = ' i love java.jpg'
isJavaScriptFile(loveline);

console.log(isJavaScriptFile(loveline));

// ================>Problem 3: oilPrice
function oilprice(discel, petrol, octane) {

    const perliterdiscel = 114;
    const perliterpetrol = 130;
    const perliteroctane = 135;

    const discelprice = discel * perliterdiscel;
    const petrolprice = petrol * perliterpetrol;
    const octaneprice = octane * perliteroctane;

    const totaloliprice = discelprice + petrolprice + octaneprice;
    return totaloliprice;

}

const totaloliprice = oilprice(30, 20, 10);

console.log(totaloliprice);



// ================>Problem 4: publicBusFare

function publicBusFare(passanger) {
    if (typeof passanger === 'number') {
        let perBus = 50;
        let perMicroBus = 11;
        let reminingBusPassanger = passanger % perBus;
        let microBusPassanger = reminingBusPassanger % perMicroBus;
        let publicBusPassanger = microBusPassanger;
        let publicBusPassangerCost = 250;
        let totalLocalCost = publicBusPassanger * publicBusPassangerCost; return totalLocalCost;
    }
    else {
        return 'Give Me Passanger Number';
    }
}
const public = publicBusFare(112);
console.log(public);


// ================>Problem 5: isBestFriend

function isBestFriend(info1, info2) {
    if (info1.name === info2.friend && info1.friend === info2.name) {
        return true;
    } else {
        return false;
    }
}

console.log(isBestFriend({ name: 'Tom', friend: 'Rock' }, { name: 'Rock', friend: 'Tom' }));
