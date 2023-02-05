document.addEventListener("DOMContentLoaded", () => {
    const formUI = document.querySelector(".login-form");

    formUI.addEventListener("submit", (e) => {
        e.preventDefault();

        const listFields = Array.from(formUI.elements).filter(item => item.hasAttribute("name"));

        if (!isValidateForm(listFields)) {
            alert("All fields must be filled");
            return;
        }

        handleSubmit(listFields);
    });
});

function isValidateForm(fields) {
    return fields.every(item => item.value.length > 0);
}

function handleSubmit(fields) {
    const result = {};

    for (const item of fields) {
        result[item.name] = item.value;
    }

    console.log(result);

    clearForm(fields);
}

function clearForm(fields) {
    for (const item of fields) {
        item.value = "";
    }
}