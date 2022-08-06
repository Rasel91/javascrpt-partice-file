

// <!-- Javascript Program to Enter the P, T, R, and Calculate it's Simple Interest -->

function simpleInterst(p, t, r) {

      // p = principal
    // t = time
    // r = rate
    // SI = simple interest

    console.log(parseInt(p * t * r) / 100);
    return;

}
simpleInterst(15, 12, 12,)



// <!-- Javascript Program to Enter the P, T, R, and Calculate it's Simple Interest -->
// <script type="text/javascript">

    var p, t, r, SI;
    
    // p = principal
    // t = time
    // r = rate
    // SI = simple interest
    
    // Calculate simple interest
    p = 15;
    t = 12;
    r = 12;
    


    SI = (p * t * r) / 100;
    
    // Output
//     document.write("Simple Interest = " + SI);
// </script>


// =======================


// JavaScript code to calculate Compound Interest

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

