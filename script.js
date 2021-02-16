const counter = (() => {
  const counterDom = document.getElementById('counter');
  let i = 0;
  counterDom.textContent = '-';

  const updateDisplay = () => {
    if (i === 0) { counterDom.textContent = '-'; } else { counterDom.textContent = i; }
  };

  const increase = () => {
    if (i === 3) {
      i = 0;
    } else {
      i++;
    }
    updateDisplay();
  };

  const decrease = () => {
    if (i === 0) {
      return;
    }
    i--;
    updateDisplay();
  };

  return { increase, decrease };
}());

const upButton = document.getElementById('up');
const downButton = document.getElementById('down');

upButton.addEventListener('click', counter.increase);
downButton.addEventListener('click', counter.decrease);
