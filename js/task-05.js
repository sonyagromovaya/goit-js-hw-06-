const nameInput = document.querySelector("#name-input");
const spanArea = document.querySelector("#name-output");

nameInput.addEventListener("input", (event) => {
  if (event.currentTarget.value === "") {
    return (spanArea.textContent = "Anonymous");
  }
  spanArea.textContent = event.currentTarget.value;
});
