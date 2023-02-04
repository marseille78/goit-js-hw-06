document.addEventListener("DOMContentLoaded", () => {
  const blockCategories = document.querySelector("#categories");
  const listCategories = blockCategories.querySelectorAll(".item");

  console.log(`Number of categories: ${getNumberOfChildren(blockCategories)}`);

  for (const item of listCategories) {
    console.log(`Category: ${item.firstElementChild.textContent}`);
    console.log(`Elements: ${getNumberOfChildren(item.lastElementChild)}`);
  }
});

function getNumberOfChildren(parent) {
  return parent.children.length;
}