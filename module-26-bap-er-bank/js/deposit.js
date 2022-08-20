  // step-1: add event listener to the deposit button

  document.getElementById('btn-deposit').addEventListener('click', function(){

  // step-2: get the deposit amount from the deposit input field
  // Convert string deposit amount to a number type
  // For input field use .value to the the value inside the input field
  const depositField = document.getElementById('deposit-field');
  const newDepositAmountString = depositField.value;
  const newDepositAmount = parseFloat(newDepositAmountString);
  
  // step-3: clear the deposit input field after getting the value
  depositField.value = '';

  // step-4: get the current deposit total
  // for non-input(element other than input, textarea) use innerText to get the text
  const depositTotalElement = document.getElementById('deposit-total');
  const previousDepositTotalString = depositTotalElement.innerText;
  const previousDepositTotal = parseFloat(previousDepositTotalString);
  
  // step-5: add numbers to set the total deposit
  const currentDepositTotal = previousDepositTotal + newDepositAmount;
  // set the value to the deposit total
  depositTotalElement.innerText = currentDepositTotal;

  // step-6: get current ballance  total
  const balanceTotalElement = document.getElementById('balance-total');
  const previousBalanceTotalString = balanceTotalElement.innerText;
  const previousBalanceTotal = parseFloat(previousBalanceTotalString);

  // step-7: calculate current total balance
  const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
  // set it to the balance total element
  balanceTotalElement.innerText = currentBalanceTotal;

})