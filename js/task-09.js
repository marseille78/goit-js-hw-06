document.addEventListener("DOMContentLoaded", () => {
  (function () {
    const btnGenerateBgColorUI = document.querySelector(".change-color");

    btnGenerateBgColorUI.addEventListener('click', setBgColor);
  })();
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function setBgColor() {
  document.body.style.backgroundColor = getRandomHexColor();
  document.querySelector('.color').textContent = getRandomHexColor();
}