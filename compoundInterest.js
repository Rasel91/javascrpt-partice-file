
// Javascript code (compoundinterest.js)

// var principle = document.getElementById("principle");
// var roi = document.getElementById("roi");
// var years = document.getElementById("years");
// var outputspan = document.getElementById("outputspan");

// //itvoyagers.in
// function countCI()
// {
// 	p = parseFloat(principle.value);
// 	r = parseFloat(roi.value);
// 	t = parseFloat(years.value);
// 	ci = p*(Math.pow((1+r/100),t));
// 	outputspan.innerHTML = ci;
// }



function countCI(p, t, r) {
    // p = parseFloat(principle.value);
    // r = parseFloat(roi.value);
    // t = parseFloat(years.value);
    // ci = p*(Math.pow((1+r/100),t));
    // outputspan.innerHTML = ci;

    console.log(p * (Math.pow((1 + r / 100), t)));

    return;

}
countCI(15, 12, 12,)