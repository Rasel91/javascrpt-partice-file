
//  Here we find a to z objects

var myMobile = {
    brand: 'sumsung',
    price: '11500',
    model: 'A03 ',
    manufacturyear: '2021',
    camera: '7Mp',
    color: 'red',
}
console.log(myMobile);
// Target : Object Value Change 
myMobile.color = 'yellow';
console.log(myMobile);

// Trget : Get object propertics
console.log(myMobile.brand);

// Trget : Get object values and keys 

console.log(Object.values(myMobile));
console.log(Object.keys(myMobile));
