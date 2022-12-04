const symbolEl = {
    input: document.querySelector("#validation-input"),
};

symbolEl.input.addEventListener('blur', onValidInput);

function onValidInput(event) {
    event.currentTarget.classList.remove('invalid');

    if (event.currentTarget.value.length === 6) {
        symbolEl.input.classList.add('valid')
    } else {
        symbolEl.input.classList.add('invalid')
    };
};

