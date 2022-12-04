const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();

    const formElements = event.currentTarget.elements;
    const formEmail = formElements.email.value;
    const formPassword = formElements.password.value;

    if (formEmail === "" || formPassword === "") {
        alert("Всі поля повинні бути заповнені");
    } else {
        console.log({ Email: formEmail, Password: formPassword });
    };

    event.currentTarget.reset();
}
