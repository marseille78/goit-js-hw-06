document.addEventListener("DOMContentLoaded", () => {
  const placeInsert = document.querySelector('#boxes');
  const btnCreate = document.querySelector('[data-create]');
  const btnClear = document.querySelector('[data-destroy]');
  const fieldInput = document.querySelector('input[type=number]');

  btnCreate.addEventListener(
      'click',
      () => {
        const amount = parseInt(fieldInput.value);

        if (amount < +fieldInput.min || amount > +fieldInput.max) return;

        clearBoxes(placeInsert);
        placeInsert.append(...createBoxes(amount));
        fieldInput.value = '';
      }
  );

  btnClear.addEventListener('click', () => clearBoxes(placeInsert));
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function createBoxes(amount) {
  const arrBlocks = [];
  let widthInit = 30;
  let heightInit = 30;

  for (let i = 0; i < amount; i += 1) {
    const blockItem = document.createElement("div");
    blockItem.style.width = `${widthInit}px`;
    blockItem.style.height = `${heightInit}px`;
    blockItem.style.backgroundColor = getRandomHexColor();
    arrBlocks.push(blockItem);
    widthInit += 10;
    heightInit += 10;
  }

  return arrBlocks;
}

function clearBoxes(element) {
  element.innerHTML = '';
}