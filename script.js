"use strict";

let desserts = [
  {
    name:"Bluetooth",
    category: "drink",
    description: "A blueberry slushy topped with fresh blueberries and a sugared rim.",
    price: 5.00,
  },
  {
    name:"HTMLKSHAKE",
    category: "drink",
    description:"Pick your flavor: Chocolate, Strawberry, or Vanilla. Topped with a cherry, whipped topping and your choice of sprinkles.",
    price: 6.00,
  },
  {
    name:"Java",
    category: "drink",
    description: "Plain black cup of coffee to pair with your dessert.",
    price: 1.00,
  },
  {
    name:"JavaScript",
    category: "drink",
    description: "For those who need a little extra, plain black cup of coffee with a shot of espresso.",
    price: 2.00,
  },
  {
    name:"If...Else",
    category: "drink",
    description:"If (you tell us you want cream) { We'll add cream } Else if (you tell us you want sugar) {We'll add sugar} Else (you want both) {We'll throw in both}",
    price: 3.00,
  },
  {
    name: "The Motherboard",
    category: "icecream",
    description:"Two scoops of icecream (flavor of your choice) topped with up to 10 toppings: Nutty: Peanuts, almonds, walnuts, cashews, pecans. Fruity: Strawberries, blueberries, raspberries, banana, pineapple, cherries, coconut. Gettin' Saucy: Hot fudge, caramel, chocolate, strawberry, butterscotch. Top it off: Whipped topping, brownie bits, Oreos, peanut butter cups, sprinkles, M & Ms, gummy bears, chocolate chips, marshmallows, graham cracker, vanilla wafers.",
    price: 10.00,
  },
  {
    name: "The Array",
    category: "icecream",
    description: ` { name: Banana Split,
      category: "icecream",
      description: "A split banana topped with one scoop of chocolate icecream, one vanilla, and one strawberry. Accomponied by crushed nuts, fresh fruits and complimenting syrup.",
      price: 8.00 `
    price: 8.00,
  },
  {
    name: "Mobile First",
    category: "icecream",
    description: "Let's keep it simple - our homemade icecream cone with one scoop of your chosen flavor.",
    price: 3.00,
  },
  {
    name: "5G",
    category: "layered",
    description: "A slice of Gypsy tart with Graham cracker crust, topped with Granola and Gingerbread crumbles, finished off with a delicious scoop of vanilla Gelato.",
    price: 6.00,
  },
  {
    name: "CSS",
    category: "layered",
    description: "Cheesecake (of course New York style) with fresh Strawberries and Strawberry sauce.",
    price: 6.00,
  },
  {
    name:"Full-Stack",
    category: "layered",
    description: "You know what smores are? It's like that. A base of graham cracker, followed by a chocolate bar, and finished off with some lightly toasted marshmallows. Served warm.",
    price:7.00,
  },
  {
    name:"Debug",
    category: "layered",
    description: "It's not often we encourage having bugs, especially in food. The exception is our dirt pudding with gummy worms. A base of chocolate pudding, topped with brownie bits and a few bugs. ",
    price:4.00,
  },
]


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
