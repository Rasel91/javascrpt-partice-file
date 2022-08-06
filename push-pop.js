//1. এভাবে অর্থাৎ দুইবার ভেরিয়েববল নিয়ে যদি করা যায় তাহলে অ্যারে এর Index ও Push numebr দেখায়। এ্যারের মধ্যে শেষ উপদান  যোগ করতে  এটা হয়।
// var numbers = [45, 55, 65, 75, 85, 95];
// var element = numbers.push(35);
// console.log(numbers);
// console.log(element);


// 2.এ্যারে হতে নম্বর শেষ উপদানটা বাহির করা হয়।

// var numbers = [45, 55, 65, 75, 85, 95];
// var element = numbers.pop();
// console.log(numbers);
// console.log(element);

// 3.এ্যারে হতে নম্বর 1st  উপদানটা বাহির করা হয়।

var numbers = [45, 55, 65, 75, 85, 95];
numbers.shift();
console.log(numbers);

// 4.এ্যারে হতে নম্বর 1st include  উপদানটা input করা হয়।

var numbers = [45, 55, 65, 75, 85, 95];
numbers.unshift(22);
console.log(numbers);
