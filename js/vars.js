document.addEventListener('DOMContentLoaded', function() {
  Calc.init({
    warning: this.querySelector('.warning'),
    amountLoan: this.querySelector('.amount'),
    percentages: this.querySelector('.percentages'),
    years: this.querySelector('.years'),
    calcBtn: this.querySelector('.calculate-btn'),
    loanSpinner: this.querySelector('.loan-spinner'),
    result: this.querySelector('.loan-result'),
    monthlyPayment: this.querySelector('.monthly-payment'),
    totalPayment: this.querySelector('.total-payment'),
    totalInterest: this.querySelector('.total-interest')
  });
});