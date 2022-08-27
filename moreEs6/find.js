const numbers = [12, 13, 14, 15, 16, 18, 24, 20, 23];
const numFind = numbers.find(number => number / 2);
console.log(numFind);

const addNum = numbers.filter(number => number % 4 === 0);
console.log(addNum);

// Find  এর কাজ হচ্ছে সে যে শর্ত কাজ করবে তার উপর find করবে   এর যেটার সাথে প্রথমে মিলে যাবে সেটা রির্টান করবে । 

const products = [
    { id: 1, name: 'laptop', price: '45000' },
    { id: 2, name: 'mobile', price: '75000' },
    { id: 3, name: 'watch', price: '55000' },
    { id: 4, name: 'tablet', price: '65000' }
];

const findProduct = products.find(product => product.price > 45000);
console.log(findProduct);