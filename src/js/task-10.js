function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const colorEl = {
  divControls: document.querySelector('#controls'),
  input: document.querySelector('input'),
  buttonCreate: document.querySelector('button[data-create]'),
  buttonDestroy: document.querySelector('button[data-destroy]'),
  divBoxes: document.querySelector('#boxes'),
}

colorEl.buttonCreate.addEventListener('click', createBoxes);
colorEl.buttonDestroy.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  amount = colorEl.input.value;

  const arrayDiv = [];

  for (let i = 1; i <= amount; i += 1) {
    let BoxEl = `<div class="box-${i}"></div>`;
    arrayDiv.push(BoxEl);
  };

  const markup = arrayDiv.join("");

  colorEl.divBoxes.insertAdjacentHTML("beforeend", markup);

  for (let i = 0; i < amount; i += 1) {
    colorEl.divBoxes.children[i].style.width = (30 + 10 * i) + "px";
    colorEl.divBoxes.children[i].style.height = (30 + 10 * i) + "px";
    colorEl.divBoxes.children[i].style.backgroundColor = getRandomHexColor();
  }
};

function destroyBoxes() {
  colorEl.divBoxes.innerHTML = "";
};