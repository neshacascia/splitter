const tipBtns = document.querySelectorAll('.tipBtns');
const resetBtn = document.getElementById('reset');

let billAmount;
let numOfPeople;
let selectedTip;
let tipAmount;
let total;

if (!tipAmount && !total) {
  resetBtn.setAttribute('disabled', true);
}

resetBtn.addEventListener('click', resetCalculator);

document.getElementById('numOfPeople').addEventListener('input', e => {
  let number = e.target.value;

  if (number === '') {
    numOfPeople = 1;
  } else {
    numOfPeople = number;
  }

  calculate();
});

tipBtns.forEach(item => item.addEventListener('click', gatherDetails));

function gatherDetails(e) {
  billAmount = Number(document.getElementById('billAmount').value);
  selectedTip = Number(e.target.value);

  if (selectedTip === 0) {
    document.getElementById('custom').addEventListener('input', e => {
      selectedTip = e.target.value / 100;
      calculate();
    });
  } else {
    calculate();
  }
}

function calculate() {
  if (numOfPeople) {
    tipAmount = (billAmount * selectedTip) / numOfPeople;
    total = billAmount / numOfPeople + tipAmount;
  } else {
    tipAmount = billAmount * selectedTip;
    total = billAmount + tipAmount;
  }

  resetBtn.removeAttribute('disabled');
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
  document.getElementById('custom').value = '';

  resetBtn.setAttribute('disabled', true);
  displayAmounts();
}

function displayAmounts() {
  document.getElementById('tipAmount').innerText = `$${tipAmount.toFixed(2)}`;
  document.getElementById('total').innerText = `$${total.toFixed(2)}`;
}
