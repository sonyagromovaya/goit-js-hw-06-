const inputArea = document.querySelector("#validation-input");
// const dataLength = document.querySelector("[data-length]");
console.log(inputArea.dataset.length);
// console.log(inputArea.value.length);
console.log(typeof inputArea.dataset.length);

inputArea.addEventListener("blur", () => {
  const num = Number(inputArea.dataset.length);
  if (inputArea.value.length === num) {
    inputArea.classList.remove("invalid");
    return inputArea.classList.add("valid");
  }
  return inputArea.classList.add("invalid");
});
