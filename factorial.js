// factorial.js
function factorial(number) {

    let result = 1;
    for (let i = 1; i <= number; i++) {
        result = result * i;
    }

    return result;
}

const result = factorial(7);

console.log(result);




/* // factorial calculation of for loop

function factorial(number) {
    let result = 1;
    for (let i = number; i >= 1; i--) {
        result = result * i;
        // console.log(i);
    }
    return result;
}
const number = 8;
const fact = factorial(number);
console.log('factorial of: ', number, fact); */


/* 
// factorial calculation of while loop revrase way 
function factorial(number) {
    let i = number;
    let result = 1;
    while (i >= 1) {
        result = result * i;
        i--;
    }
    return result;
}
const number = 8;
const whi = factorial(number);
console.log('factorial of: ', number, whi);
 */
// factorial calculation of while loop forward way 

// function factorial(number) {
//     let i = 1;
//     let result = 1;
//     while (i <= 20) {
//         result = result * i;
//         i++;
//     }
//     return result;
// }
// const number = 20;
// const whi = factorial(number);
// console.log('factorial of: ', number, whi);