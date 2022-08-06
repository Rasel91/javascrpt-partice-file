
//  Factorial for Multipication number (******)

// function factorial(number) {
//     let result = 1;
//     for (let i = 1; i <= number; i++) {
//         result = result * i;
//         console.log(i, result);
//     }
//     return result;
// }
// const number = 10;
// const fact = factorial(number);
// console.log(fact);


//  Factorial for odd number(------))

function factorial(number) {
    let result = 1;
    for (let i = number; i >= 1; i--) {
        result = result * i;
        console.log(i, result);
    }
    return result;
}
const number = 7;
const fact = factorial(number);
console.log(fact);






//  Factorial for Add number(+++++++++)
// function factorial(number) {
//     let result = 1;
//     for (let i = 0; i <= number; i++) {
//         result = result + i;
//         console.log(i, result);
//     }
//     return result;

// }

// factorial(22);




for (let i = 1; i <= 100; i++) {
    console.log(i);
}