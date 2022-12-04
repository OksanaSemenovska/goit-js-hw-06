function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const randomCol = {
  button: document.querySelector(".change-color"),
  span: document.querySelector(".color"),
}

randomCol.button.addEventListener('click', onChangeColor);

function onChangeColor(event) {
  document.body.style.backgroundColor = getRandomHexColor();
  randomCol.span.textContent = document.body.style.backgroundColor;
}