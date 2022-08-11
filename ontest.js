
// function addNumber(a, b) {

//     var sum = a + b;
//     return sum;
// }
// console.log(addNumber(5, 8));


// function isjaScriptFiel(file) {
//     const result = loveline.endsWith('.pdf');
//     return result;
// }
// const loveline = ' i love java.jpg'
// isjaScriptFiel(loveline);

// console.log(isjaScriptFiel(loveline));



function isBestFriend(info1, info2) {

    if (info1.name === info2.friend && info1.friend === info2.name) {
        return true;
        console.log('There best friend');
    } else {
        return false;
    }

}
// console.log(isBestFriend({ name: 'Tom', friend: 'Rock' }, { name: 'Rock', friend: 'Tom' }));



// ======================================


// function publicBusFare(passanger) {
//     let rent = 0;

//     if (passanger % 50 !== 0) {
//         return 'They going to bus'
//     } else if (passanger % 50 !== 0 && passanger === 11) {
//         return ' they will go to bus and car'
//     } else {
//         return 'they will go to local bus'
//     }
// }
// console.log(publicBusFare(21));

// =================






function publicBusFare(passanger) {
    if (typeof passanger === 'nubmer') {

        let perBus = 50;

        let perMicroBus = 11;

        let reminingBusPassanger = passanger % perBus;

        let microBusPassanger = reminingBusPassanger % perMicroBus;

        let publicBusPassanger = microBusPassanger;

        let publicBusPassangerCost = 250;

        let totalLocalCost = publicBusPassanger * publicBusPassangerCost;

        return totalLocalCost;
    }

    else {
        return 'Give Me People Number';
    }
}

const public = publicBusFare(155);
console.log(public);




