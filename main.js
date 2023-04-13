let billAmount;
let numOfPeople;
let selectedTip;
let tipAmount;
let total;

const tipBtns = document.querySelectorAll('.tipBtns');
tipBtns.forEach(item => item.addEventListener('click', calculateTipAmount));

function calculateTipAmount(e) {
  billAmount = Number(document.getElementById('billAmount').value);
  numOfPeople = Number(document.getElementById('numOfPeople').value);
  selectedTip = Number(e.target.value);

  if (numOfPeople >= 1) {
    tipAmount = (billAmount * selectedTip) / numOfPeople;
    total = billAmount / numOfPeople + tipAmount;
  } else {
    numOfPeople = 1;
    tipAmount = billAmount * selectedTip;
    total = billAmount + tipAmount;
  }
  displayAmounts();
}

function resetCalculator() {
  billAmount = 0;
  numOfPeople = 0;
  selectedTip = 0;
  tipAmount = 0;
  total = 0;

  document.getElementById('billAmount').value = '';
  document.getElementById('numOfPeople').value = '';

  displayAmounts();
}

function displayAmounts() {
  document.getElementById('tipAmount').innerText = `$${tipAmount.toFixed(2)}`;
  document.getElementById('total').innerText = `$${total.toFixed(2)}`;
}
