
var numbers = [45, 50, 51, 52, 55, 60, 69, 70, 81, 96];
// along with 55 and above
for (var i = 0; i < numbers.length; i++) {
    var number = numbers[i];
    if (number < 55) {
        continue;
    }
    console.log(number);
}

// less 55

// for (var i = 0; i < numbers.length; i++) {
//     var number = numbers[i];
//     if (number >= 55) {
//         continue;
//     }
//     console.log(number);
// }


// above 55

// for (var i = 0; i < numbers.length; i++) {
//     var number = numbers[i];
//     if (number <= 55) {
//         continue;
//     }
//     console.log(number);
// }