document.addEventListener("DOMContentLoaded", () => {
    (function () {
        const inputFieldUI = document.querySelector("#validation-input");

        inputFieldUI.addEventListener('blur', handleBlur);
    })();
});

function handleBlur(e) {
    const field = e.target;
    const className = field.value.length === +field.dataset.length
        ? 'valid'
        : 'invalid';

    field.className = "";
    field.classList.add(className);
}