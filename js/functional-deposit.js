/**
1. get event listener to the deposit button
2.get deposit amount from the deposit input filed
2-5 Convert string deposit amount to a number type.

3. clear the Deposit input field after getting the value

4. get the previous deposit total. 

5. calculate new deposit total and set the value to the deposit total. 

6. get ballance current total.

7. calculate current total Balance.
 */
//step-1
document.getElementById('btn-deposit').addEventListener('click', function () {

  //step-2
  const depositFiled = document.getElementById('deposit-field');
  const newDepositAmountString = depositFiled.value;
  const newDepositAmount = parseFloat(newDepositAmountString);

  // step-3
  depositFiled.value = '';

  if (isNaN(newDepositAmount)) {
    alert("Please enter valid number")
    return;
  }


  // step-4:
  const depositTotalElement = document.getElementById('deposit-total');
  const previousDepositTotalString = depositTotalElement.innerText;
  const previousDepositTotal = parseFloat(previousDepositTotalString);


  // step-5:
  const newDepositTotal = newDepositAmount + previousDepositTotal
  depositTotalElement.innerText = newDepositTotal;

  // step-6:
  const balanceTotalElement = document.getElementById('total-balance');
  const previousBalanceTotalString = balanceTotalElement.innerText;
  const previousBalanceTotal = parseFloat(previousBalanceTotalString);

  // step-7:
  const newBalanceTotal = previousBalanceTotal + newDepositAmount
  balanceTotalElement.innerText = newBalanceTotal;




})