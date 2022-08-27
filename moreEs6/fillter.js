// ফিল্টার শর্তনুশারে সবগুলো রিটার্ন করবে 


//Find bigNumber Use filter 
const numbers = [12, 13, 14, 15, 16, 18, 24, 20, 23]
const bigNumber = numbers.filter(number => number > 20);
// console.log(bigNumber);





// find even , odd  and tiny Number Use filter 
const numbers1 = [12, 13, 14, 15, 16, 18, 24, 20, 23]
const tinyNumber = numbers1.filter(number => number < 20);

const evenNumbers = numbers1.filter(number => number % 2 === 0)

const oddNumbers = numbers1.filter(number => number % 2 !== 0)

console.log(tinyNumber);
console.log(evenNumbers);
console.log(oddNumbers);


// 

const products = [
    { id: 1, name: 'laptop', price: '45000' },
    { id: 2, name: 'mobile', price: '75000' },
    { id: 3, name: 'watch', price: '55000' },
    { id: 4, name: 'tablet', price: '65000' }
];

// const expensive = products.filter(product => product.price > 50000);
// console.log(expensive);
const expensive = products.filter(product => product.price < 1000);
console.log(expensive);