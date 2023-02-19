const calculator = document.querySelector('.calculator');
const display = calculator.querySelector('.calculator-screen');
const keys = calculator.querySelector('.calculator-keys');

keys.addEventListener('click', event => {
  if (event.target.matches('button')) {
    const key = event.target;
    const action = key.dataset.action;
    const keyContent = key.textContent;
    const displayedNum = display.textContent;
    
    if (!action) {
      if (displayedNum === '0') {
        display.textContent = keyContent;
      } else {
        display.textContent = displayedNum + keyContent;
      }
    }
    
    if (action === 'decimal') {
      if (!displayedNum.includes('.')) {
        display.textContent = displayedNum + '.';
      }
    }
    
    if (action === 'clear') {
      display.textContent = '0';
    }
    
    if (action === 'calculate') {
      const expression = display.textContent;
      const result = eval(expression);
      display.textContent = result;
    }
    
    if (action === 'operator') {
      const previousKeyType = calculator.dataset.previousKeyType;
      const firstValue = calculator.dataset.firstValue;
      const operator = calculator.dataset.operator;
      const secondValue = displayedNum;
      
      if (firstValue && operator && previousKeyType !== 'operator' && previousKeyType !== 'calculate') {
        const result = calculate(firstValue, operator, second