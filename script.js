"use strict";

let drinkBtn = document.querySelector(".drink");
let mainContainer = document.querySelector(".main");
let drinkContainer = document.querySelector(".drink-cont");
mainContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("drink")) {
    drinkContainer.classList.toggle("hidden");
  }
});
