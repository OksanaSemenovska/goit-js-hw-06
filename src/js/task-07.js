const scriptEl = {
    input: document.querySelector("#font-size-control"),
    span: document.querySelector("#text"),
}

scriptEl.input.addEventListener('input', onChangeFontSize);

function onChangeFontSize(event) {
    scriptEl.span.style.fontSize = event.currentTarget.value + "px";
};

