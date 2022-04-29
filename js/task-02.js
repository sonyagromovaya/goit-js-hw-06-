const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const liElement = document.querySelector("ul#ingredients");

const items = ingredients.map((el) => {
  const newEl = document.createElement("li");
  newEl.textContent = el;
  newEl.classList.add("item");
  return newEl;
});

liElement.append(...items);
