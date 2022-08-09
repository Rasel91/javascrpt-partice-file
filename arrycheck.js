const country = 'bangladesh';
const age = 52;
const isIndependent = true;
const student = { id: 12, class: 12, name: 'manun' };
const friends = ['abdul', 'subdul', 'gabdul', 'minul'];
function add(number1, number2) {
    return number1 + number2;
}


// console.log(typeof country);
// console.log(typeof age);
// console.log(typeof student);
//  এ্যারে চেক সাধারণত typeof দিয়ে হয় না। Array.isArray দিয়ে ‍এ্যারে চেক করতে হয়। 
// console.log(Array.isArray(friends));
// console.log(typeof add);




// ==================

// checking an array 
const numbers = [19, 20, 23, 22, 25, 26, 28, 29, 30, 32];

console.log(numbers.includes(20));

// alterNative way checking an arry 

if (numbers.indexOf(202) !== -1) {

}


// concat  কোন নতুন element যোগ করতে এটা ব্যবহার করতে হয় 


const newNumber = [15, 18, 19, 13, 17];
const allNumber = newNumber.concat(numbers);
console.log(allNumber);



