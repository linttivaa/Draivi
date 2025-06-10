const amountSlider = document.getElementById("loan-amount");
const amountInput = document.getElementById("loan-amount-input");
const durationSlider = document.getElementById("loan-duration");
const durationInput = document.getElementById("loan-duration-input");
const monthlyPaymentText = document.getElementById("monthly-payment");

function updateMonthlyPayment() {
  const amount = parseFloat(amountSlider.value);
  const duration = parseInt(durationSlider.value, 10);
  const interestRate = 0.05;
  const monthlyInterest = interestRate / 12;
  const monthlyPayment =
    (amount * monthlyInterest) /
    (1 - Math.pow(1 + monthlyInterest, -duration));

  monthlyPaymentText.textContent = `${monthlyPayment.toFixed(1)} €`;
}

function setSliderBackground(slider) {
  const min = parseFloat(slider.min);
  const max = parseFloat(slider.max);
  const val = parseFloat(slider.value);
  const percentage = ((val - min) / (max - min)) * 100;

  // Left: dark green (#0C2900), Right: bright green (#2B8F00)
  slider.style.background = `linear-gradient(to right, #0C2900 ${percentage}%, #2B8F00 ${percentage}%)`;
}



// Loan Amount - Sync and style
amountSlider.addEventListener("input", () => {
  amountInput.value = amountSlider.value;
  setSliderBackground(amountSlider);
  updateMonthlyPayment();
});

amountInput.addEventListener("input", () => {
  amountSlider.value = amountInput.value;
  setSliderBackground(amountSlider);
  updateMonthlyPayment();
});

// Loan Duration - Sync and style
durationSlider.addEventListener("input", () => {
  durationInput.value = durationSlider.value;
  setSliderBackground(durationSlider);
  updateMonthlyPayment();
});

durationInput.addEventListener("input", () => {
  durationSlider.value = durationInput.value;
  setSliderBackground(durationSlider);
  updateMonthlyPayment();
});

// Initialize visuals on load
setSliderBackground(amountSlider);
setSliderBackground(durationSlider);
updateMonthlyPayment();
