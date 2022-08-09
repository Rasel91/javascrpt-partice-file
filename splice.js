

//  কোন সংখ্যাকে arry  এর মধ্যে হতে নিতে হলে এটা ‍ ব্যবহার করতে হয়। এটা ব্যবহার করতে মুল এ্যারে একই থাকে না এবং নতুন element Add করা যায়


// Remove element form an arry
//  and if necesary, inserts new elements in their place
// returning the deleted elements.
// will change the original arry
// 

const friends = [20, 22, 23, 25, 28, 29, 30, 100, 500, 700];

const partial = friends.splice(2, 5, 303, 402, 505, 506, 660);
console.log(partial);

console.log(friends);
