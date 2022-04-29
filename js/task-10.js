function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const boxes = document.querySelector("#boxes");
const btnCreate = document.querySelector("button[data-create]");
const btnDestroy = document.querySelector("button[data-destroy]");
const inputEl = document.querySelector('input[type="number"]');

const createBoxes = (amount) => {
  let boxSize = 30;
  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement("div");

    box.style.backgroundColor = getRandomHexColor();
    box.style.width = boxSize + "px";
    box.style.height = boxSize + "px";
    boxes.append(box);
    boxSize += 10;
  }

  console.log(boxes);
};

btnCreate.addEventListener("click", () => createBoxes(inputEl.value));

btnDestroy.addEventListener("click", () => {
  boxes.innerHTML = "";
});
