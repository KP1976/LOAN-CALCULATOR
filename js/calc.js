const Calc = (_=> {
  function countLoan() {
    const amountLoanValue = vars.amountLoan.value;
    const percentagesValue = vars.percentages.value;
    const years = vars.years.value;
    const amount = parseFloat(amountLoanValue);
    const regExp = /^\d+(\.\d+)?$/; // liczba float
 
    vars.result.classList.remove('on');

    if(!regExp.test(amountLoanValue) || !regExp.test(percentagesValue) || !regExp.test(years) ) {
      vars.warning.classList.add('on');
      setTimeout(_=> vars.warning.classList.remove('on'), 2000);
      return;
    } else {
      vars.loanSpinner.classList.add('on');

      setTimeout(_=> {
        vars.result.classList.add('on');

        const calcInterest = parseFloat(vars.percentages.value) / 100 / 12;
        const calcPayments = parseFloat(vars.years.value) * 12;
        const x = Math.pow(1 + calcInterest, calcPayments);
        const monthly = (amount*x*calcInterest)/(x-1);
        
        vars.monthlyPayment.textContent = monthly.toFixed(2) + ' PLN';
        vars.totalPayment.textContent = (monthly * calcPayments).toFixed(2) + ' PLN';
        vars.totalInterest.textContent = (monthly * calcPayments - amount).toFixed(2) + ' PLN';

        vars.loanSpinner.classList.remove('on');
      }, 2000);
    }

  }

  function init(_vars) {
    vars = _vars;

    vars.calcBtn.addEventListener('click', countLoan);
  }

  return { init };
})(); 