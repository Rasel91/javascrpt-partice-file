

document.getElementById('btn-withdraw').addEventListener('click', function () {
    // step:2
    const withdrawField = document.getElementById('withdraw-feild');
    const newwithdrawAmountString = withdrawField.value;
    const newwithdrawAmount = parseFloat(newwithdrawAmountString);


    // step-3:
    withdrawField.value = '';

    // step-4:
    const withdrawFieldTotalElement = document.getElementById('deposit-Wihtdraw');
    const previousWithdrawAmountString = withdrawFieldTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawAmountString);

    // step-5:

    const newWithdrawTotal = previousWithdrawTotal + newwithdrawAmount;
    withdrawFieldTotalElement.innerText = newWithdrawTotal;

    // step-6:


    const withdrawBalanceElement = document.getElementById('balance-total');
    const withdrawBalanceElementString = withdrawBalanceElement.innerText;
    const withdrawBalanceTotalElementAmount = parseFloat(withdrawBalanceElementString)

    // step-7:
    const newWithdrawTotalAmount = withdrawBalanceTotalElementAmount - newwithdrawAmount;

    withdrawBalanceElement.innerText = newWithdrawTotalAmount;



})