// Find the index of an arry কিভাবে index দিয়ে কোন একটা array এর মধ্যে উপাদান এর মান খুঁজে বের করতে পারো 

var fruits = ['apple', 'Banana', 'Orange'];

var banaIndex = fruits.indexOf('Banana');
console.log(banaIndex);





// Replace an arry /কিভাবে কোন একটা index পজিশন এ array এর উপাদান এর মান চেইঞ্জ করতে পারবে

var fruits = ['apple', 'Banana', 'Orange'];

var banaIndex = fruits.indexOf('Banana');

fruits[banaIndex] = 'Mango';
console.log(fruits);

// ===============



// Minus an arry Last element

fruits.pop();
console.log(fruits);
// add an arry last elemetnt
fruits.push('Watermelon');
console.log(fruits);
// add an arry first element
fruits.unshift('Pinaple');
console.log(fruits);

// Minus an arry first element
fruits.shift();
console.log(fruits);



