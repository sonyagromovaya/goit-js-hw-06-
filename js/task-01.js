// "use strict";

// const item = document.querySelector("#categories");

// const itemsOfCategories = document.querySelectorAll("li.item");

// console.log(itemsOfCategories.length);
// item.forEach((el) => {
//   console.log(`Category: ${el.querySelector("h2").textContent}`);
//   console.log(`Elements: ${itemsOfCategories.length}`);
// });

"use strict";

const items = document.querySelectorAll(".item");

console.log(items.length);

items.forEach((el) => {
  console.log(`Category: ${el.querySelector("h2").textContent}`);
  console.log(`Elements: ${el.querySelectorAll("li").length}`);
});
