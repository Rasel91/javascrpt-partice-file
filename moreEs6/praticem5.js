let name = 'rasel';
name = 'ruhe'
// console.log(name);

const FirstName = 'habiba';
//    FirstName = 'Rohan'
// console.log(FirstName);

const age = 32;
const Name1 = 'Rasel';
const location = 'Meherpur';

let students = {
    id: 202,
    name: 'Rahi',
    age: 32,
    nationality: 'Bangli'
}

const allInformation = `This is ${Name1}, his age ${age}, live in ${location} district at Khulna Division and also ${students.nationality}`;
// console.log(allInformation);


// const dividedValue = (a, b) => a/ b;
// const result = dividedValue(30, 10);
// console.log(result);


const dividedValues = (a) => a / 5;
let y = dividedValues(30);
// console.log(y);

const dividedValue = (a, b) => a / b;

let x = dividedValue(30, 10);

console.log(x);


// let a = 30;
// let b = 10;

// const nums = [20];

// const makeDobules = nums.map(x => x * 2);

// console.log(makeDobules);


const doCalculation = (m, n, o) => {
    const firstSum = m + n;
    const secondSum = n + o;
    const multipluResult = firstSum * secondSum;
    const result = multipluResult / 5;
    return result;

}

const m = 10;
const n = 20;
const o = 30;

const v = doCalculation(m, n, o)
console.log(v);

const twoparSum = (b, d) => {

    const add1 = b + 2;
    const add2 = d + 2;
    const multipluBV = add1 * add2;

    const result = multipluBV;

    return result;
}

const b = 6;
const d = 8;

const twoCal = twoparSum(b, d);
console.log(twoCal);


const namMulit = (r, h, j) => r * h * j;

const r = 2;
const h = 2;
const j = 2;

const viewResult = namMulit(r, h, j);
console.log(viewResult);


const nums = [2, 6, 5, 7, 9];

const multipluFive = nums.map(x => x * 5);

console.log(multipluFive);


const digtis = [14, 15, 16, 18, 1, 9, 20, 25, 42, 27, 23];
const oddDigit = digtis.filter(digti => digti % 2 !== 0);
console.log(oddDigit);



const products = [
    { id: 1, name: 'laptop', price: '5000' },
    { id: 2, name: 'mobile', price: '7000' },
    { id: 3, name: 'watch', price: '5500' },
    { id: 4, name: 'tablet', price: '6500' }
];


const findProduct = products.find(product => product.price <= 5000);
console.log(findProduct);