/*
1. get the element by id
2. get the value from the element
3 convert string value to a number
*/
// 1. get previous deposit total by id
// 2. calculate deposit textDecorationLine
// 3. set deposit total value
// 4. get previous balance by using the function
// 5. get previous balance by using the function
document.getElementById('btn-deposit').addEventListener('click', function () {
  const newDepositAmount = getInputFiledValueById('deposit-field');
  const previousDepositTotal = getTextElementValueById('deposit-total');
  const newDepositTotal = previousDepositTotal + newDepositAmount;
  setTextElementValueById('deposit-total', newDepositTotal);
  const previousBalanceTotal = getTextElementValueById('total-balance');
  const newBalanceTotal = previousBalanceTotal + newDepositAmount;
  setTextElementValueById('total-balance', newBalanceTotal);
}) 