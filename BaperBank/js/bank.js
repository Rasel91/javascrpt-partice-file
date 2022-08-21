/* 
1. Add even listener to the deposit button
2. Get Deposti amount from the deposit input field
2-5. Covert string deposit amount to a number type  
3.clear the deposit input field after getting the value
4.Get the previous deposit total
5. calculate new deposit total and set the value to the deposit total
*/

// step-1
document.getElementById('btn-deposit').addEventListener('click', function () {
    // step-2
    const depositFeild = document.getElementById('deposit-filed');
    const newDepositAmountString = depositFeild.value;
    const newDepositAmount = parseFloat(newDepositAmountString);

    // step-3: 
    depositFeild.value = '';

    // step-4:
    const depositTotalElement = document.getElementById('deposit-total');

    const previousDepositTotalString = depositTotalElement.innerText;

    const previousDepositTotal = parseFloat(previousDepositTotalString);

    // step-5:
    const newDepositTotal = previousDepositTotal + newDepositAmount;

    depositTotalElement.innerText = newDepositTotal;

    // step-6:
    const balanceTotalElement = document.getElementById("balance-total");
    const balanceTotalElementString = balanceTotalElement.innerText;
    const balanceTotalElementAmount = parseFloat(balanceTotalElementString);

    // step-7:

    const newBalanceTotalAmount = newDepositTotal + balanceTotalElementAmount;
    balanceTotalElement.innerText = newBalanceTotalAmount;

})


