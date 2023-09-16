/*
1. add withdraw button even handler
2. get withdraw amount by using getInputFiledValueById function
3. previous withdraw amount by using getTextElementValueById function
4. calculate new withdraw total and set the value
5. set new withdraw total by using setTextElementValueById function
6. get previous balance total by using getTextElementValueById function
7. set balance total using by setTextElementValueById
*/
document.getElementById('btn-withdraw').addEventListener('click', function () {
  const newWithdrawAmount = getInputFiledValueById('withdraw-field');
  if (isNaN(newWithdrawAmount)) {
    alert("Please enter valid number")
    return;
  }
  const previousWithdrawTotal = getTextElementValueById('withdraw-total');
  const previousBalanceTotal = getTextElementValueById('total-balance');
  if (newWithdrawAmount > previousBalanceTotal) {
    alert("Baap er Bank e eto Taka nai");
    return;
  }
  const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
  setTextElementValueById('withdraw-total', newWithdrawTotal);
  const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
  setTextElementValueById('total-balance', newBalanceTotal);

}) 