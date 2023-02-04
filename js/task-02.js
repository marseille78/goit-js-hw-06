const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

document.addEventListener("DOMContentLoaded", () => {
  const elements = ingredients.map(createItem);
  document
    .querySelector("#ingredients")
    .append(...elements);
});

function createItem(text) {
  const elementUI = document.createElement("li");
  elementUI.textContent = text;
  return elementUI;
}