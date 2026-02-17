"use strict";

const counter = document.querySelector(".counter");
const buttons = document.querySelector(".buttons");

if (!counter || !buttons) {
  throw new Error("Element not found");
}
let buttonLast;
buttons.addEventListener("click", (event) => {
  const elClick = event.target;
  elClick.innerText = "Нажата";
  counter.innerText = Number(counter.innerText) + 1;
  if (buttonLast) {
    buttonLast.innerText = "Не нажата";
  }
  buttonLast = elClick;
});
