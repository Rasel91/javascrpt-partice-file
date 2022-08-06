// multipulacationofnumbers.js

// 1 * 2 * 3* 4 * 5 * 6 * 7

function multipiliacationOfNumbers(number) {

    let result = 1;
    for (let i = 1; i <= number; i++) {
        result = result * i;
    }

    return result;
}

const result = multipiliacationOfNumbers(7);

console.log(result);