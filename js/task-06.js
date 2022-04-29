const inputArea = document.querySelector("#validation-input");
// const dataLength = document.querySelector("input[data-length]");
// console.log(dataLength);

inputArea.addEventListener("blur", () => {
  if (inputArea.value.length < inputArea.dataset.length) {
    inputArea.classList.add("invalid");
  }
  return inputArea.classList.add("valid");
});
