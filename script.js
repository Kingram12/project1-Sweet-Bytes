"use strict";

let desserts = [
  {
    name: "HTMLKSHAKE",
    image: "assets/HTMLKSHAKE.jpg",
    category: "drink",
    description:
      "Pick your flavor: Chocolate, Strawberry, or Vanilla. Topped with a cherry, whipped topping and your choice of sprinkles.",
    price: `$${6}.00`,
  },
  {
    name: "Bluetooth",
    image: "assets/bluetooth.jpg",
    category: "drink",
    description:
      "A blueberry slushy topped with fresh blueberries and a sugared rim.",
    price: `$${5}.00`,
  },
  {
    name: "Java",
    image: "assets/Java.jpg",
    category: "drink",
    description: "Plain black cup of coffee to pair with your dessert.",
    price: `$${1}.00`,
  },
  {
    name: "JavaScript",
    image: "assets/Java.jpg",
    category: "drink",
    description:
      "For those who need a little extra, plain black cup of coffee with a shot of espresso.",
    price:  `$${2}.00`,
  },
  {
    name: "If...Else",
    image: "assets/Java.jpg",
    category: "drink",
    description:
      "If (you tell us you want cream) { We'll add cream } Else if (you tell us you want sugar) {We'll add sugar} Else (you want both) {We'll throw in both}",
    price:  `$${3}.00`,
  },
  {
    name: "The Motherboard",
    image: "assets/Motherboard.png",
    category: "icecream",
    description:
      "Two scoops of icecream (flavor of your choice) topped with up to 10 toppings: Nutty: Peanuts, almonds, walnuts, cashews, pecans. Fruity: Strawberries, blueberries, raspberries, banana, pineapple, cherries, coconut. Gettin' Saucy: Hot fudge, caramel, chocolate, strawberry, butterscotch. Top it off: Whipped topping, brownie bits, Oreos, peanut butter cups, sprinkles, M & Ms, gummy bears, chocolate chips, marshmallows, graham cracker, vanilla wafers.",
    price: `$${10}.00`,
  },
  {
    name: "The Array",
    image: "assets/Array.jpg",
    category: "icecream",
    description: ` { name: Banana Split,
      category: "icecream",
      description: "A split banana topped with one scoop of chocolate icecream, one vanilla, and one strawberry. Accomponied by crushed nuts, fresh fruits and complimenting syrup.",`,
    price:  `$${8}.00`,
  },
  {
    name: "Mobile First",
    image: "assets/Mobile-First.jpg",
    category: "icecream",
    description:
      "Let's keep it simple - our homemade icecream cone with one scoop of your chosen flavor.",
    price:  `$${3}.00`,
  },
  {
    name: "5G",
    image: "assets/5G.jpg",
    category: "layered",
    description:
      "A slice of Gypsy tart with Graham cracker crust, topped with Granola and Gingerbread crumbles, finished off with a delicious scoop of vanilla Gelato.",
    price:  `$${6}.00`,
  },
  {
    name: "CSS",
    image: "assets/CSS.jpg",
    category: "layered",
    description:
      "Cheesecake (of course New York style) with fresh Strawberries and Strawberry sauce.",
    price:  `$${6}.00`,
  },
  {
    name: "Full-Stack",
    image: "assets/Full-Stack-V2.jpg",
    category: "layered",
    description:
      "You know what smores are? It's like that. A base of graham cracker, followed by a chocolate bar, and finished off with some lightly toasted marshmallows. Served warm.",
    price:  `$${7}.00`,
  },
  {
    name: "Debug",
    image: "assets/Debug.jpg",
    category: "layered",
    description:
      "It's not often we encourage having bugs, especially in food. The exception is our dirt pudding with gummy worms. A base of chocolate pudding, topped with brownie bits and a few bugs. ",
    price:  `$${4}.00`,
  },
];

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

desserts.forEach((dessert) => {
  let card = document.createElement("div");
  let head = document.createElement("h2");
  head.innerText = dessert.name;
  card.append(head);
  let imgCont = document.createElement("div");
  imgCont.classList.add("centerContent")
  let img = document.createElement("img");
  img.setAttribute("src", dessert.image);
  img.classList.add("imgDisplay");
  imgCont.append(img);
  card.append(imgCont);
  let description = document.createElement("p");
  description.innerText = dessert.description;
  card.append(description);
  let price = document.createElement("p");
  price.innerText = dessert.price;
  card.append(price);

  if (dessert.category === "drink") {
    drinkContainer.append(card);
  } else if (dessert.category === "icecream") {
    iceCreamContainer.append(card);
  } else {
    layeredContainer.append(card);
  }
});
