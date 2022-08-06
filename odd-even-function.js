// Check even and odd number using function

function isEven(number) {
   const remainder = number % 2;
   if (remainder === 0) {
      return true
   }
   else {
      return false;
   }
}

const myNumber = isEven(503);

const hisNumber = isEven(1280);
console.log('Mynumber is :', myNumber, 'Hisnumber is' ,hisNumber);