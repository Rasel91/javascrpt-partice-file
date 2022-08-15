
// option 1

//   <button onclick="console.log(65)"> Click Another </button>


// Options : 2
{/* <button onclick="makeRed()">Make Red</button> */ }
// we will this Very Important
function makeRed() {
    document.body.style.backgroundColor = 'Red';
}

// Options : 3 
const makeBlueButton = document.getElementById('Make-blue');
makeBlueButton.onclick = makeBlue;

function makeBlue() {
    document.body.style.backgroundColor = 'blue';
};


// Options : 3 another{we use this sometime}
const purpleButton = document.getElementById('make-purple');
purpleButton.onclick = function makePurple() {
    document.body.style.backgroundColor = 'purple';
}

// option: 4
const makeGreenButton = document.getElementById('make-green');

makeGreenButton.addEventListener('click', function () {
    document.body.style.backgroundColor = 'Green';
});


// Option finanl

// Very Important we will use this

document.getElementById('make-goldenrod').addEventListener('click', function () {
    document.body.style.backgroundColor = 'goldenrod';
})
