
// ============> feetToInch

function feetToInches(feet) {
    const inch = feet * 12;
    return inch;

}

const herHightFeet = 2;
const herHigthInch = feetToInches(herHightFeet);
console.log('Her Hight Inch:', herHigthInch);

// function inchToFeet(inches){
//     const feet = inches/12;
//     return feet;

//   }


// ===========================>centimeterToMeter

function centimeterToMeter(centimeter) {
    const meter = centimeter / 100;
    return meter;

}
const myLandcentimeter = 1000;
const hisLandmeter = centimeterToMeter(myLandcentimeter);
console.log('My Land length is  :', hisLandmeter);