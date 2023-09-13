
// Deposit 
//Step-1: add eventListener to the deposit
document.getElementById('btn-deposit').addEventListener('click', function () {

  //Step-2: get the deposit amount from the deposit input field
  // For input field use .value to the value inside the input field
  const depositField = document.getElementById('deposit-field');
  const newDepositAmountString = depositField.value;
  const newDepositAmount = parseFloat(newDepositAmountString);


  // step-7: clear the deposit Filed..
  depositField.value = '';

  if (isNaN(newDepositAmount)) {
    alert('Please Enter Valid number');
    return;
  }
  // step-3: get the current deposit total.
  // for non-input(element other than input, textarea).
  const depositTotalElement = document.getElementById('deposit-total');
  const previousDepositTotalString = depositTotalElement.innerText;
  const previousDepositTotal = parseFloat(previousDepositTotalString);


  // step-4: add number to set the total deposit.
  const currentDepositTotal = previousDepositTotal + newDepositAmount;

  depositTotalElement.innerText = currentDepositTotal;




  // step-5: get ballance current total.
  const balanceTotalElement = document.getElementById('total-balance');
  const previousBalanceTotalString = balanceTotalElement.innerText;
  const previousBalanceTotal = parseFloat(previousBalanceTotalString);


  // step-6: calculate current total Balance.
  const newBalanceTotal = previousBalanceTotal + newDepositAmount;

  balanceTotalElement.innerText = newBalanceTotal;


});

