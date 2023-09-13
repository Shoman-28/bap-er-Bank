// withdraw
// step-1 add eventListener to the withdraw
document.getElementById('btn-withdraw').addEventListener('click', function () {

  //Step-2: get the withdraw amount from the withdraw input field
  // For input field use .value to the value inside the input field
  const withdrawFiled = document.getElementById('withdraw-field');
  const newWithdrawAmountString = withdrawFiled.value;
  const newWithdrawAmount = parseFloat(newWithdrawAmountString);

  //step-7: clear the withdraw filed
  withdrawFiled.value = '';

  if (isNaN(newWithdrawAmount)) {
    alert('Please Enter valid number')
    return;
  }

  // step-3: get the current Withdraw total.
  // for non-input(element other than input, textarea).
  const withdrawTotalElement = document.getElementById('withdraw-total');
  const previousWithdrawTotalString = withdrawTotalElement.innerText;
  const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);


  // step-5: get ballance current total.
  const balanceTotalElement = document.getElementById('total-balance');
  const previousBalanceTotalString = balanceTotalElement.innerText;
  const previousBalanceTotal = parseFloat(previousBalanceTotalString);



  if (newWithdrawAmount > previousBalanceTotal) {
    alert('Baap er Bank e eto Taka nai');
    return;
  }

  // step-4: add number to set the total withdraw.
  const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;

  withdrawTotalElement.innerText = currentWithdrawTotal;

  // step-6: calculate current total Balance.
  const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;

  balanceTotalElement.innerText = newBalanceTotal;


})