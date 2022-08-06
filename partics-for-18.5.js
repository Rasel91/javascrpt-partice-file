// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// // Determain the length of an arrry
// let length = fruits.length;
// console.log(length);

// // Determain the  Index of an arrry
// for (var i = 0; i < fruits.length; i++) {

//     console.log(i);
// }

// // Determain the element of an arry accodring to Index  of an arrry
// for (var i = 0; i < fruits.length; i++) {
//     var fruit = fruits[i];
//     console.log(fruit);
// }
// Determain the element of an arry accodring to Index  of an arrry
// for (var i = 0; i < fruits.length; i++) {
//     var fruit = fruits[i];
//     console.log(fruit);
// }





// var numbers = [45, 50, 51, 52, 55, 60, 69, 70, 81, 96];

// for (var i = 0; i < numbers.length; i++) {
//     var number = numbers[i];
//     console.log(number);




// // index of an arrry
// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// var fruitIndex = fruits.indexOf("Orange");

// // Replace an element  index of an arrry
// fruits[fruitIndex] = "jackfruits";

// // Add an element  index of an arrry
// fruits.push('Watermelon');

// // Minus an element  index of an arrry
// fruits.pop();
// console.log(fruits);


// আসকে আমার মন ভালো নেই -- এই কথা ৩৯ বার আউটপুট হিসেবে দেখাও। 
// var monvalo = 1;
// while (monvalo <= 39) {
//     console.log(monvalo);
//     console.log("ajki amer Mon valo nai");

//     monvalo++
// }
// . একটা কোড লিখে ৫৮ থেকে ৯৮ পর্যন্ত যত সংখ্যা আছে সেগুলাকে দেখাও 
// var number = 58;
// while (number <= 98) {
//     console.log(number);
//     number++
// }

// একটা কোড লিখে ৪১২ থেকে ৪৫৬ পর্যন্ত যত জোর সংখ্যা আছে সেগুলাকে দেখাও  

// var number = 412;
// while (number <= 456) {
//     console.log(number);
//     number += 2;
// }

// একটা কোড লিখে ৫৮১ থেকে ৬২৩ পর্যন্ত যত বিজোড় সংখ্যা আছে সেগুলাকে দেখাও 

// var number = 581;
// while (number <= 623) {
//     console.log(number);
//     number += 2;
// }

// তুমি এতদিন যা যা জিনিস শিখছো সেগুলার নাম দিয়ে একটা array বানাও। তারপর একটা for লুপ দিয়ে সেই array এর সব উপাদান কে আউটপুট হিসেবে দেখাও। 

// var iteams = ['html', 'css', 'bootstrap', 'tailwind']

// for (var i = 0; i < iteams.length; i++) {

//     var iteam = iteams[i];
//     console.log(i);
//     console.log(iteam);
// }

// তুমি এতদিন পর্যন্ত যে যে মডেলের মোবাইল ফোন ইউজ করেছো সেগুলার নাম দিয়ে একটা array বানাও। তারপর একটা while লুপ দিয়ে সেই array এর উপাদান গুলা একটা একটা করে আউটপুট হিসেবে দেখাও 

// var mobiles = ['sumsung', 'vivo', 'oppo', 'nokia']
// var i = 0;
// var mobile = 0;
// while (mobiles [i]) {
//      mobiles[i];
//      i++;
//      console.log(mobiles);
// }

// while (mobiles[mobile]) {
//     var mobile = mobiles[i];
//     mobile++;
//     console.log(mobiles);
// }

// while (mobiles[i]) {
//     var mobile = mobiles[i];
//     i++;
//     console.log(i);
//     console.log(mobile);
//     // console.log(mobiles);
// }



// উদাহরণ while loop

// var cars = ["BMW", "Volvo", "Saab", "Ford"];

// let i = 0;
// while (cars[i]) {
//     var car = cars[i];
//     i++;
//     console.log(i);
//     console.log(car);
//     // console.log(cars);
// }







// একটা ফর লুপ চালাও। ৩০ থেকে ৮৬ পর্যন্ত। আর এই লুপ ৪৪ এ গেলে ব্রেক করবে। সেই জিনিস কোড করে দেখাও 

// var nums = [30, 34,37, 38, 40, 41,44, 45, 50, 51, 52, 55, 60, 69, 70, 81, 86]; 

// for (var i = 0; i < nums.length; i++) {
//     var num = nums[i];

//     if (num > 44) {
//         break;
//     }
//     console.log(num);
// }

// তোমার যত বই আছে সেগুলার দাম নিয়ে একটা array লিখে ফেলো। যে বই গুলোর দাম ২০০ টাকার উপরে সেগুলাকে স্কিপ করবে। অর্থাৎ সেগুলাকে আউটপুট হিসেবে দেখাবে না। বাকিদের কে আউটপুট হিসেবে দেখাবে। দেখো করতে পারো কিনা। 

var numbers = [151, 152, 155, 180, 190, 200, 260, 269, 270, 381, 386];

for (var i = 0; i < numbers.length; i++) {
    var number = numbers[i];
    if (number >= 200) {
        continue;
    }
    console.log(number);
}


