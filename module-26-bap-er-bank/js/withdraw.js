/* 
1. add event handler with the withdraw button

2. get the withdraw amount from the withdraw input field
2-5. also make sure to convert the input into a number by using parseFloat

3. clear the input field

4. Get previous withdraw total

5. calculate total withdraw amount 
5.5 set total withdraw amount

6. get the previous balance total

7. calculate new balance and set it to the balance total element

*/

  // step-1
  document.getElementById('btn-withdraw').addEventListener('click', function () {

  // step-2:
  const withdrawField = document.getElementById('withdraw-field');
  const newWithDrawAmountString = withdrawField.value;
  const newWithdrawAmount = parseFloat(newWithDrawAmountString);

  // step-3
  withdrawField.value = '';

  if (isNaN(newWithdrawAmount)) {
      alert('Please provide a valid number');
      return;
  }

  // step-4
  const withdrawTotalElement = document.getElementById('withdraw-total');
  const previousWithdrawTotalString = withdrawTotalElement.innerText;
  const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

  // step-5
  const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
  withdrawTotalElement.innerText = currentWithdrawTotal;

  // step-6
  const balanceTotalElement = document.getElementById('balance-total');
  const previousBalanceTotalString = balanceTotalElement.innerText;
  const previousBalanceTotal = parseFloat(previousBalanceTotalString);


  if (newWithdrawAmount > previousBalanceTotal) {
      alert('Baap er bank e eto taka nai');
      return;
  }



  // step-6
  const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
  balanceTotalElement.innerText = newBalanceTotal;

})