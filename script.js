"use strict";

let drinkBtn = document.querySelector(".drink");
let mainContainer = document.querySelector(".main");
let drinkContainer = document.querySelector(".drink-cont");
let iceCreamContainer = document.querySelector(".iceCream-cont");
let layeredContainer = document.querySelector(".layered-cont");
mainContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("drink")) {
    drinkContainer.classList.toggle("hidden");
  } else if (e.target.classList.contains("iceCream")) {
    iceCreamContainer.classList.toggle("hidden");
  } else {
    layeredContainer.classList.toggle("hidden");
  }
});
