/*
withdraw
1. add eventListener to the withdraw

2. get the withdraw amount from the withdraw input field
For input field use.value to the value inside the input field

3. clear the withdraw filed

4. condition valid number input field.

5. get the current Withdraw total.
for non - input(element other than input, textarea).

6. add number to set the total withdraw.

7. get ballance current total.

8 . calculate current total Balance.
*/

//step-1

document.getElementById('btn-withdraw').addEventListener('click', function () {

  // step-2
  const withdrawField = document.getElementById('withdraw-field');
  const newWithdrawAmountString = withdrawField.value;
  const newWithdrawAmount = parseFloat(newWithdrawAmountString);

  //step-3 
  withdrawField.value = '';

  // step-4
  if (isNaN(newWithdrawAmount)) {
    alert('please enter valid number');
    return;
  }

  //step-5
  const withdrawTotalElement = document.getElementById('withdraw-total');
  const previousWithdrawTotalString = withdrawTotalElement.innerText;
  const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

  //step-7
  const balanceTotalElement = document.getElementById('total-balance');
  const previousTotalBalanceString = balanceTotalElement.innerText;
  const previousTotalBalance = parseFloat(previousTotalBalanceString);


  if (newWithdrawAmount > previousTotalBalance) {
    alert("Baap er Bank e eto Taka nai");
    return;
  }

  //step-6
  const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
  withdrawTotalElement.innerText = currentWithdrawTotal;

  // step-8
  const newTotalBalance = previousTotalBalance - newWithdrawAmount;
  balanceTotalElement.innerText = newTotalBalance;
})