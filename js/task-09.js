function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnChangeColour = document.querySelector(".change-color");

const colourArea = document.querySelector(".color");

const bodyEl = document.body;

btnChangeColour.addEventListener("click", (event) => {
  const colour = getRandomHexColor();
  bodyEl.style.backgroundColor = colour;
  colourArea.textContent = colour;
});
