// ================ Use let
let name = 'rasel';
name = 'ruhe'
console.log(name);

// ================== Use const 

const FirstName = 'habiba';
// FirstName = 'Rohan';
console.log(FirstName);

// ===============


// ============== use tamplate String
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
console.log(allInformation);


const dividedValue = (a, b) => a / b;
const result = dividedValue(30, 10);
console.log(result);


// const dividedValues = (a) => a / 5;
// let y = dividedValues(30);
// console.log(y);

const dividedValu = (a, b) => a / b;

let x = dividedValu(30, 10);

console.log(x);

// ==============
// let a = 30;
// let q = 10;

//=========== makeDobules
const numss = [20];
const makeDobules = numss.map(x => x * 2);
console.log(makeDobules);

// ============

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


// Use normal Function Sum Two parameter

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


// Use Arrow function Multiply 3 element 

const namMulit = (r, h, j) => r * h * j;

const r = 2;
const h = 2;
const j = 2;

const viewResult = namMulit(r, h, j);
console.log(viewResult);
const nums = [2, 6, 5, 7, 9];
const multipluFive = nums.map(x => x * 5);
console.log(multipluFive);


// Use filter for the array element Result 

const digtis = [14, 15, 16, 18, 1, 9, 20, 25, 42, 27, 23];
const oddDigit = digtis.filter(digti => digti % 2 !== 0);
console.log(oddDigit);


// Ues Find to the Result 
const products = [
    { id: 1, name: 'laptop', price: '5000' },
    { id: 2, name: 'mobile', price: '7000' },
    { id: 3, name: 'watch', price: '5500' },
    { id: 4, name: 'tablet', price: '6500' }
];


const findProduct = products.find(product => product.price <= 5000);
console.log(findProduct);



// Use Destructuring 

const rollNumber = { one: 1, two: 2, three: 3, four: 4, five: 5, six: 6, };
const { one, two, three, four, five, six } = rollNumber;
console.log(two);



// Add Use Arrow Function 3 parameters
const threeNumber = (i, u, e) => i + u + e;
let i = 10;
let u = 10;
let e = 10;
const addResult = threeNumber(i, u, e);
console.log(addResult);


//============ nested object

const nestedobject = {

    id: 205,

    student: {
        id: 208,
        data: {
            name: 'Ruhi',
            age: 7,
            location: 'Dhaka',
            school: 'Oxford Gg',

            subjects: {
                math: 29,
                english: 69,
                physic: 78,
            }

        }



    }

}

console.log(nestedobject.student?.data?.subjects?.math);
