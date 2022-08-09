// Target: Conver miles to kilomers

function milesTokilomter(miles) {
    const kilometer = miles * 1.609;
    return kilometer;

}

const meherpurMiles = 14;
const meherpurkilometer = milesTokilomter(meherpurMiles);
console.log('MeherpurMiles:', meherpurkilometer);