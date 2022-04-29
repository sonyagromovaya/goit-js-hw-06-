const counterValue = document.querySelector("#value");
const decBtn = document.querySelector('button[data-action="decrement"]');
const incBtn = document.querySelector('button[data-action="increment"]');

let value = 0;

decBtn.addEventListener("click", () => {
  value -= 1;
  counterValue.textContent = value;
});

incBtn.addEventListener("click", () => {
  value += 1;
  counterValue.textContent = value;
});
