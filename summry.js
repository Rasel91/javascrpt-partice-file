var num = 0;
while (num <= 10) {
    console.log(num);
    num++;
}

for (var i = 0; i <= 10; i++) {
    console.log(i);
    if (i == 8) {
        break;
    }
}

var numbers = [45, 50, 51, 52, 55, 60, 69, 70, 81, 96];
// along with 55 and above
for (var i = 0; i < numbers.length; i++) {
    var number = numbers[i];
    if (number <= 55) {
        continue;
    }
    console.log(number);
}

const fruits = ["Banana", "Orange", "Apple", "Mango"];
let length = fruits.length;
console.log(length);
