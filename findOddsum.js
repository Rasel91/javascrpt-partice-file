// 20-5 Calculate Sum of all numbers of an array

function getSumOfArray(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        const index = i;              /* check arry index call it  */
        const element = numbers[index];
        sum = sum + element;
        console.log(index, element, sum);     /*  Showing many Iteams use this system  */
    }
    return sum;
}

const myNubmers = [12, 14, 16, 18, 19, 20, 30];
getSumOfArray(myNubmers);
// console.log(myNubmers);