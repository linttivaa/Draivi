const loanAmountRange = document.getElementById("loan-amount");
const loanAmountInput = document.getElementById("loan-amount-input");

const loanDurationRange = document.getElementById("loan-duration");
const loanDurationInput = document.getElementById("loan-duration-input");

const monthlyPaymentDisplay = document.getElementById("monthly-payment");

const form = document.getElementById("loan-form");

const INTEREST_RATE = 0.05; 

// Syncing loan amount range with input
loanAmountRange.addEventListener("input", () => {
  loanAmountInput.value = loanAmountRange.value;
  updateMonthlyPayment();
});

loanAmountInput.addEventListener("input", () => {
  const val = parseInt(loanAmountInput.value, 10);
  if (val >= 1000 && val <= 20000 && val % 1000 === 0) {
    loanAmountRange.value = val;
    updateMonthlyPayment();
  }
});

// Syncing loan duration range with input
loanDurationRange.addEventListener("input", () => {
  loanDurationInput.value = loanDurationRange.value;
  updateMonthlyPayment();
});

loanDurationInput.addEventListener("input", () => {
  const val = parseInt(loanDurationInput.value, 10);
  if (val >= 12 && val <= 20) {
    loanDurationRange.value = val;
    updateMonthlyPayment();
  }
});

// Calculating and updating monthly payment
function updateMonthlyPayment() {
  const amount = parseInt(loanAmountRange.value, 10);
  const months = parseInt(loanDurationRange.value, 10);
  const total = amount * (1 + INTEREST_RATE);
  const monthly = (total / months).toFixed(1);
  monthlyPaymentDisplay.textContent = `${monthly} €`;
}

// Validating form on submit
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const phone = form.phone.value.trim();
  const terms = form.terms.checked;

  const errors = [];

  // Basic validations
  if (name === "") {
    errors.push("Nimi vaaditaan.");
  }

  if (!validateEmail(email)) {
    errors.push("Sähköposti ei ole kelvollinen.");
  }

  if (!validatePhone(phone)) {
    errors.push("Puhelinnumero ei ole kelvollinen.");
  }

  if (!terms) {
    errors.push("Hyväksythän käyttöehdot.");
  }

  if (errors.length > 0) {
    alert(errors.join("\n"));
    return;
  }

  // Submit logic (e.g., send to backend) could go here
  alert("Lomake lähetetty onnistuneesti!");
});

// Additional email validation
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

// Additional phone validation for Finnish phone numbers
function validatePhone(phone) {
  const re = /^[0-9+\-\s]{6,20}$/;
  return re.test(phone);
}

updateMonthlyPayment();
