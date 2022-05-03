const fontControl = document.querySelector("#font-size-control");
const textArea = document.querySelector("#text");
textArea.style.fontSize = fontControl.value + "px";

fontControl.addEventListener("input", (event) => {
  //   fontControl.setAttribute
  //   fontControl.setAttribute("value", textArea.style.fontSize);
  textArea.style.fontSize = event.currentTarget.value + "px";
});
