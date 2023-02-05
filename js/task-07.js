document.addEventListener("DOMContentLoaded", () => {
    (function () {
        const rangeField = document.querySelector("#font-size-control");
        const textBlock = document.querySelector("#text");

        rangeField.addEventListener("change", (e) => handleChangeSize(e, textBlock));
    })();
});

function handleChangeSize(e, textBlock) {
    textBlock.style.fontSize = `${e.target.value}px`;
}