
// General loop
const numbers = [2, 4, 8, 10, 12];
const output = [];
for (const number of numbers) {
    const double = number * 2;
    output.push(double);
}

// console.log(output);


// functional Loop

function getDoubles(numbers) {
    const output = [];
    for (const number of numbers) {
        // const double = number * 2;
        const double = doubleIt(number);
        output.push(double);
    }
    return output;
}

/* 
========== > purpose:
1. get an array 
2. for every elements of the array do something 
3.store the result in an array
4. return the result array
*/




// function doubleItOLd(num) {
//     return num * 2;
// }



// Arrow Function 
const doubleIt = num => num * 2;

const makeDobule = numbers.map(doubleIt);

const result = getDoubles(numbers);
console.log(result);
console.log(makeDobule);

// gte Doubles Value Use Map of an array

const nums = [2, 6, 5, 7, 9];

const makeDobules = nums.map(x => x * 2);

console.log(makeDobules);


const divdedArry = [3, 6, 8, 10, 12].map(x => x / 2);
console.log(divdedArry);


// 4. Map String arry, arry of objects Map,Foreach
const numbers3 = [12, 56, 87, 44];
const half = numbers3.map(x => x / 2);
console.log(half);


const friends = ['Tomal', 'Tamil', 'Tata', 'Bata', 'Chata'];
const firstLetter = friends.map(friend => friend[0]);
const firstLength = friends.map(friend => friend.length);
console.log(firstLetter);
console.log(firstLength);



const products = [
    { id: 1, name: 'laptop', price: '45000' },
    { id: 2, name: 'mobile', price: '75000' },
    { id: 3, name: 'watch', price: '55000' },
    { id: 4, name: 'tablet', price: '65000' }
];

const items = products.map(p => p.price);

// const items = products.map(p => p.price  >=50000);
console.log(items);