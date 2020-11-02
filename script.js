"use strict";

let desserts = [
  {
    name: "HTMLKSHAKE",
    image: "assets/HTMLKSHAKE.jpg",
    category: "drink",
    description:
      "Pick your flavor: Chocolate, Strawberry, or Vanilla. Topped with a cherry, whipped topping and your choice of sprinkles.",
    price: 6.0,
  },
  {
    name: "Bluetooth",
    image: "assets/bluetooth.jpg",
    category: "drink",
    description:
      "A blueberry slushy topped with fresh blueberries and a sugared rim.",
    price: 5.0,
  },
  {
    name: "Java",
    image: "assets/Java.jpg",
    category: "drink",
    description: "Plain black cup of coffee to pair with your dessert.",
    price: 1.0,
  },
  {
    name: "JavaScript",
    image: "assets/Java.jpg",
    category: "drink",
    description:
      "For those who need a little extra, plain black cup of coffee with a shot of espresso.",
    price: 2.0,
  },
  {
    name: "If...Else",
    image: "assets/Java.jpg",
    category: "drink",
    description:
      "If (you tell us you want cream) { We'll add cream } Else if (you tell us you want sugar) {We'll add sugar} Else (you want both) {We'll throw in both}",
    price: 3.0,
  },
  {
    name: "The Motherboard",
    image: "assets/Motherboard.png",
    category: "icecream",
    description:
      "Two scoops of icecream (flavor of your choice) topped with up to 10 toppings: Nutty: Peanuts, almonds, walnuts, cashews, pecans. Fruity: Strawberries, blueberries, raspberries, banana, pineapple, cherries, coconut. Gettin' Saucy: Hot fudge, caramel, chocolate, strawberry, butterscotch. Top it off: Whipped topping, brownie bits, Oreos, peanut butter cups, sprinkles, M & Ms, gummy bears, chocolate chips, marshmallows, graham cracker, vanilla wafers.",
    price: 10.0,
  },
  {
    name: "The Array",
    image: "assets/Array.jpg",
    category: "icecream",
    description: ` { name: Banana Split,
      category: "icecream",
      description: "A split banana topped with one scoop of chocolate icecream, one vanilla, and one strawberry. Accomponied by crushed nuts, fresh fruits and complimenting syrup.",`,
    price: 8.0,
  },
  {
    name: "Mobile First",
    image: "assets/Mobile-First.jpg",
    category: "icecream",
    description:
      "Let's keep it simple - our homemade icecream cone with one scoop of your chosen flavor.",
    price: 3.0,
  },
  {
    name: "5G",
    image: "assets/5G.jpg",
    category: "layered",
    description:
      "A slice of Gypsy tart with Graham cracker crust, topped with Granola and Gingerbread crumbles, finished off with a delicious scoop of vanilla Gelato.",
    price: 6.0,
  },
  {
    name: "CSS",
    image: "assets/CSS.jpg",
    category: "layered",
    description:
      "Cheesecake (of course New York style) with fresh Strawberries and Strawberry sauce.",
    price: 6.0,
  },
  {
    name: "Full-Stack",
    image: "assets/Full-Stack-V2.jpg",
    category: "layered",
    description:
      "You know what smores are? It's like that. A base of graham cracker, followed by a chocolate bar, and finished off with some lightly toasted marshmallows. Served warm.",
    price: 7.0,
  },
  {
    name: "Debug",
    image: "assets/Debug.jpg",
    category: "layered",
    description:
      "It's not often we encourage having bugs, especially in food. The exception is our dirt pudding with gummy worms. A base of chocolate pudding, topped with brownie bits and a few bugs. ",
    price: 4.0,
  },
];

let cart = [];

let drinkBtn = document.querySelector(".drink");
let mainContainer = document.querySelector(".main");
let drinkContainer = document.querySelector(".drink-cont");

let iceCreamContainer = document.querySelector(".iceCream-cont");
let layeredContainer = document.querySelector(".layered-cont");
let totalItems = document.querySelector(".totalItems");
let total = 0;
let cartLink = document.querySelector(".lets-eat");
let subTotalPrice = 0;
let submitButton = document.createElement("button");
submitButton.innerText = "Confirm Order";
let submitButton2 = document.createElement("button");
submitButton2.innerText = "Confirm Order";

mainContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("drink")) {
    drinkContainer.classList.toggle("hidden");
  } else if (e.target.classList.contains("iceCream")) {
    iceCreamContainer.classList.toggle("hidden");
  } else {
    layeredContainer.classList.toggle("hidden");
  }
  if (e.target.classList.contains("cardBtn")) {
    let targetIndex = e.target.getAttribute("data-index");
    let indexNumber = parseInt(targetIndex);
    let newCartItem = {
      name: desserts[indexNumber].name,
      image: desserts[indexNumber].image,
      category: desserts[indexNumber].category,
      description: desserts[indexNumber].description,
      price: desserts[indexNumber].price,
    };
    let newTotal = ++total;
    totalItems.innerText = `Let's Eat!
    Total Items:${newTotal}`;
    console.log(total);
    cart.push(newCartItem);
    console.log(cart);
  }
});

desserts.forEach((dessert, index) => {
  let card = document.createElement("div");
  card.classList.add("card");
  let head = document.createElement("h2");
  head.innerText = dessert.name;
  card.append(head);
  let imgCont = document.createElement("div");
  imgCont.classList.add("centerContent");
  let img = document.createElement("img");
  img.setAttribute("src", dessert.image);
  img.classList.add("imgDisplay");
  imgCont.append(img);
  card.append(imgCont);
  let description = document.createElement("p");
  description.innerText = dessert.description;
  card.append(description);
  let price = document.createElement("p");
  price.innerText = ` $${dessert.price.toFixed(2)}`;
  card.append(price);
  let addBtn = document.createElement("button");
  addBtn.innerText = "Add To Order";
  addBtn.classList.add("cardBtn");
  addBtn.setAttribute("data-index", index);
  card.append(addBtn);
  if (dessert.category === "drink") {
    drinkContainer.append(card);
  } else if (dessert.category === "icecream") {
    iceCreamContainer.append(card);
  } else {
    layeredContainer.append(card);
  }
});

cartLink.addEventListener("click", () => {
  let cartContainer = document.createElement("div");
  cartContainer.classList.add("cart-cont", "align");
  mainContainer.append(cartContainer);
  cart.forEach((item, index) => {
    let cartItem = document.createElement("p");
    let name = item.name;
    let price = ` $${item.price.toFixed(2)}`;
    cartItem.append(name, price);
    cartContainer.append(cartItem);
    subTotalPrice += item.price;
  });
  let tax = subTotalPrice * 0.06;
  let totalPrice = subTotalPrice + tax;
  let cartTotal = document.createElement("p");
  cartTotal.innerText = `Subtotal: $${subTotalPrice.toFixed(2)}
  Tax: $${tax.toFixed(2)}
  Total: $${totalPrice.toFixed(2)}`;
  cartContainer.append(cartTotal);

  let paymentTypeCont = document.createElement("div");
  paymentTypeCont.classList.add("paymentCont");
  let cashLabel = document.createElement("label");
  cashLabel.setAttribute("for", "cash");
  cashLabel.innerText = "Cash Payment";
  let cashRadioBtn = document.createElement("input");
  cashRadioBtn.setAttribute("type", "radio");
  cashRadioBtn.setAttribute("name", "paymentType");
  cashRadioBtn.setAttribute("id", "cash");
  cashRadioBtn.classList.add("cash");

  let cardLabel = document.createElement("label");
  cardLabel.setAttribute("for", "card");
  cardLabel.innerText = "Card Payment";
  let cardRadioBtn = document.createElement("input");
  cardRadioBtn.setAttribute("type", "radio");
  cardRadioBtn.setAttribute("name", "paymentType");
  cardRadioBtn.setAttribute("id", "card");
  cardRadioBtn.classList.add("card");
  paymentTypeCont.append(cashLabel, cashRadioBtn, cardLabel, cardRadioBtn);
  cartContainer.append(paymentTypeCont);

  let cashForm = document.createElement("form");
  cashForm.classList.add("hidden", "align");
  let cashTenderedLabel = document.createElement("label");
  cashTenderedLabel.setAttribute("for", "cashTendered");
  cashTenderedLabel.innerText = "Amount Tendered:";
  let cashTendered = document.createElement("input");
  cashTendered.setAttribute("type", "number");
  cashTendered.setAttribute("step", 0.01);
  cashTendered.setAttribute("name", "cashTendered");
  cashTendered.setAttribute("id", "cashTendered");
  cashTendered.classList.add("cashRec");

  cashForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let snapShot = new FormData(cashForm);
    let cashAmount = snapShot.get("cashTendered");
    if (cashAmount < totalPrice) {
      alert("That's not Enough!");
      cashTendered.reset();
    } else {
      let change = cashAmount - totalPrice;
      let changeDue = document.createElement("p");
      changeDue.innerText = `Change Due: $${change.toFixed(2)}`;
      cartContainer.append(changeDue);
    }
    cashForm.classList.add("hidden");
    paymentTypeCont.remove();
    let rcpt = document.createElement("h3");
    rcpt.innerText = "Thank You for your purchase!";
    cartContainer.prepend(rcpt);
    let closeRcpt = document.createElement("button");
    closeRcpt.classList.add("closeRcpt");
    closeRcpt.innerText = "X";
    cartContainer.append(closeRcpt);
    closeRcpt.addEventListener("click", (e) => {
      if (e.target.classList.contains("closeRcpt")) {
        cartContainer.remove();
        cart = [];
        total = 0;
        subTotalPrice = 0;
        totalItems.innerText = "";
      }
      console.log(cart);
    });
  });

  cashForm.append(cashTenderedLabel, cashTendered, submitButton);
  cartContainer.append(cashForm);

  let creditForm = document.createElement("form");
  creditForm.classList.add("hidden", "align");

  let cardNameLabel = document.createElement("label");
  cardNameLabel.setAttribute("for", "cardName");
  cardNameLabel.innerText = "Card Holder's Name:";
  let cardName = document.createElement("input");
  cardName.setAttribute("type", "text");
  cardName.setAttribute("name", "cardName");
  cardName.setAttribute("id", "cardName");
  cardName.setAttribute("placeholder", "Cardholder's Name");

  let cardPaymentLabel = document.createElement("label");
  cardPaymentLabel.setAttribute("for", "cardPayment");
  cardPaymentLabel.innerText = "Card Number:";
  let cardPayment = document.createElement("input");
  cardPayment.setAttribute("type", "text");
  cardPayment.setAttribute("name", "cardPayment");
  cardPayment.setAttribute("id", "cardPayment");
  cardPayment.setAttribute("minlength", 16);
  cardPayment.setAttribute("maxlength", 16);

  let cardExpLabel = document.createElement("label");
  cardExpLabel.setAttribute("for", "cardExp");
  cardExpLabel.innerText = "Exp. Date:";
  let cardExp = document.createElement("input");
  cardExp.setAttribute("type", "number");
  cardExp.setAttribute("name", "cardExp");
  cardExp.setAttribute("id", "cardExp");

  let cardCVVLabel = document.createElement("label");
  cardCVVLabel.setAttribute("for", "cardCVV");
  cardCVVLabel.innerText = "CVV Code:";
  let cardCVV = document.createElement("input");
  cardCVV.setAttribute("type", "number");
  cardCVV.setAttribute("name", "cardCVV");
  cardCVV.setAttribute("id", "cardCVV");
  creditForm.append(
    cardNameLabel,
    cardName,
    cardPaymentLabel,
    cardPayment,
    cardExpLabel,
    cardExp,
    cardCVVLabel,
    cardCVV,
    submitButton2
  );
  cartContainer.append(creditForm);

  cartContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("cash")) {
      cashForm.classList.remove("hidden");
      creditForm.classList.add("hidden");
      cashForm.append(submitButton);
    } else if (e.target.classList.contains("card")) {
      creditForm.classList.remove("hidden");
      cashForm.classList.add("hidden");
      cashForm.append(submitButton);
    }
  });
});
