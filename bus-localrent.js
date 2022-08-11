// function publicBusFare(passanger) {
//     if (typeof passanger === 'nubmer') {

//         let perBus = 50;

//         let perMicroBus = 11;

//         let reminingBusPassanger = passanger % perBus;

//         let microBusPassanger = reminingBusPassanger % perMicroBus;

//         let publicBusPassanger = microBusPassanger;

//         let publicBusPassangerCost = 250;

//         let totalLocalCost = publicBusPassanger * publicBusPassangerCost;

//         return totalLocalCost;
//     }

//     else {
//         return 'Give Me Passanger Number';
//     }
// }

// const public = publicBusFare(155);
// console.log(public);


// ==============================



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