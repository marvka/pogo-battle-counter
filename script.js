const counter = (function () {
  const counterDom = document.getElementById("counter");
  let counter = 0;

  const updateDisplay = () => {
    counterDom.textContent = counter;
  };

  const increase = () => {
    if (counter === 3) {
      counter = 0;
    } else {
      counter++;
    }
    updateDisplay();
  };

  const decrease = () => {
    if (counter === 0) {
      return;
    } else {
      counter--;
    }
    updateDisplay();
  };

  updateDisplay();
  return { increase, decrease };
})();

(function () {
  const upButton = document.getElementById("up");
  const downButton = document.getElementById("down");

  upButton.addEventListener("click", counter.increase);
  downButton.addEventListener("click", counter.decrease);
})();
