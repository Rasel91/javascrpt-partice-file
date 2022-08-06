// 17-3 Array index, get and set by index, indexOf

var numbers = [45, 55, 65, 75, 85, 95]
// 1. get element by index
var element = numbers[1];
// console.log(numbers[5]);
console.log(element);
// 2. set element value by index
numbers[2] = 88;
numbers[3] = 78;
console.log(numbers);
// 3. find index of an element

console.log(numbers.indexOf(78));
// alternativ way find index of an element
var positionIndex = numbers.indexOf(78);
console.log(positionIndex);

