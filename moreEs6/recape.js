// 1. var let const
// 2 break up var

const numbers = [1, 2, 3];
let salary = 450;
salary = 455;

// 2.default parameters
function calculationSalary(salary, tax = .25, bonus = 0) {
    const remaining = salary - salary * text;
    const total = remaining + bonus;
    return total;
}

// 3. template string 
const elementHTML = `
 <div>

 <h2> Name: </h2>
 <p> Address: </p>
 <p> Salary:${calculationSalary} </p>
 <p> Others: ${numbers[3]} </p>

  </div>

`

console.log(elementHTML);


// 4.Arrow function 
let a = [1, 3, 5, 6];
const doubleIt = x => {
    return x * 2;
};

function calculationSalary2(salary, tax, bonus) {
    return salary - salary * tax + bonus;
}


// 5. spread 
const ages = [11, 12, 14, 15, 1, 6];
const newAges = [...ages, 22, 35, 25, 66];
console.log(newAges);

// destructuring 
const { x, y, z, ...m } = { x: 12, y: 45, z: 22, c: 36, name: 'Shakib Al Hasan', salary: 450, };

 const [o, p, ...r]=[12,15,16,18,19]