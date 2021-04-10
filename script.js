const counter = (() => {
  let count = 0;

  const increase = () => {
    if (count === 3) {
      count = 0;
    } else {
      count++;
    }
  };

  const decrease = () => {
    if (count === 0) {
      count = 3;
    } else {
      count--;
    }
  };

  const getCount = () => count;

  return { increase, decrease, getCount };
})();

const displayController = (() => {
  const display = document.querySelector("#counter");

  const updateDisplay = () => {
    display.textContent = counter.getCount();
  };

  return { updateDisplay };
})();

const eventController = (() => {
  const upButton = document.querySelector("#pokeball-top");
  const downButton = document.querySelector("#pokeball-bot");

  function increase(e) {
    e.preventDefault();
    counter.increase();
    displayController.updateDisplay();
  }

  function decrease(e) {
    e.preventDefault();
    counter.decrease();
    displayController.updateDisplay();
  }

  upButton.addEventListener("mouseup", increase);
  upButton.addEventListener("touchend", increase);

  downButton.addEventListener("mouseup", decrease);
  downButton.addEventListener("touchend", decrease);
})();
