document.addEventListener("DOMContentLoaded", () => {
  new Counter("#counter");
});

class Counter {
  #rootSelector;
  #refs;
  #counterValue;

  constructor(rootSelector, counterValue = 0) {
    this.#rootSelector = rootSelector;
    this.#refs = this.#getRefs();
    this.#counterValue = counterValue;

    this.#bindEvents();
    this.updateValueUI();
  }

  #getRefs() {
    const root = document.querySelector(this.#rootSelector);
    return {
      root,
      btnDecrement: root.querySelector('[data-action="decrement"]'),
      btnIncrement: root.querySelector('[data-action="increment"]'),
      fieldValueUI: root.querySelector('#value'),
    };
  }

  #bindEvents() {
    this.#refs.btnDecrement.addEventListener('click', () => {
      this.changeCurrentValue(-1);
      this.updateValueUI();
    });
    this.#refs.btnIncrement.addEventListener('click', () => {
      this.changeCurrentValue(1);
      this.updateValueUI();
    });
  }

  changeCurrentValue(num) {
    this.#counterValue += num;
  }

  updateValueUI() {
    this.#refs.fieldValueUI.textContent = this.#counterValue;
  }
}