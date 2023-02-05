document.addEventListener("DOMContentLoaded", () => {
    (function () {
        const fieldInputUI = document.querySelector("#name-input");
        const blockGreetUI = document.querySelector("#name-output");

        fieldInputUI.addEventListener("input", (e) => {
            const message = e.target.value.length === 0
                ? "Anonymous"
                : e.target.value;

            blockGreetUI.textContent = message;
        });
    })();
});