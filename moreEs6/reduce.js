
/* 
1. Reduce (accumulatedFunction, Initial value)
2. accumulatedFunction use two parameters (Such as: previous , current)
*/

// যে কোন এ্যারে এর সকল নম্বরকে যোগ বা একত্রে আনার জন্য reduce ব্যবহার করা হয়। 

const numbers = [1, 2, 3, 4, 5];
const total = numbers.reduce((previous, current) => previous + current, 0);
console.log(total);