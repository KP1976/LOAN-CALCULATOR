document.addEventListener('DOMContentLoaded', _=> {
  Calc.init({
    warning: document.querySelector('.warning'),
    amountLoan: document.querySelector('.amount'),
    percentages: document.querySelector('.percentages'),
    years: document.querySelector('.years'),
    calcBtn: document.querySelector('.calculate-btn'),
    loanSpinner: document.querySelector('.loan-spinner'),
    result: document.querySelector('.loan-result'),
    monthlyPayment: document.querySelector('.monthly-payment'),
    totalPayment: document.querySelector('.total-payment'),
    totalInterest: document.querySelector('.total-interest')
  });
});