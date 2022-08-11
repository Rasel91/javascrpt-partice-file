// 1. chair --> 3 cft
//  2. table --> 10 cft 
//  3. bed --> 50 cft
// vary: quantity

function woodcalculator(chairQuantity, tableQuantity, bedQuantity){

    const perChairwood = 3;
    const perTablewood = 10; 
    const perBedwood = 50;

    const chairwood = chairQuantity * perChairwood;
    const tablewood = tableQuantity * perTablewood;
    const bedewood = bedQuantity * perBedwood;

    // console.log(chairQuantity, tableQuantity, bedQuantity);

    const totalwood = chairwood + tablewood + bedewood;
    
    return totalwood;
}

const totalwood = woodcalculator(24, 6, 5);
console.log(totalwood);