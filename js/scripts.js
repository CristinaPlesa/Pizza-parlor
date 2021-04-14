// Business Logic for Pizza

function Pizza(veggies, meats, cheeses, size) {
  this.veggies = veggies;
  this.meats = meats;
  this.cheeses = cheeses;
  // this.toppings = {};
  this.size = size;
}

Pizza.prototype.veggiePrice = function() {
  return (this.veggies.length - 1) * 0.25;
}

Pizza.prototype.meatPrice = function() {
  return (this.meats.length - 1) * 0.75;
}

Pizza.prototype.cheesePrice = function() {
  return this.cheeses.length * 0.5;
}
//^The cheesePrice prototype should only charge them for extra cheeses. There will be a default input choice where they get one foundational cheese that they can decide, or no cheese!

Pizza.prototype.sizePrice = function() {
  if (this.size === 0) {
    return 5;
  } else if (this.size === 1) {
    return 6;
  } else {
    return 7;
  }
}

Pizza.prototype.totalPrice = function() {
  const totalPrice = this.veggiePrice() + this.meatPrice() + this.cheesePrice() + this.sizePrice();
  return totalPrice;
}

//UI Logic
$(document).ready(function() {
  $("#customPizzaInput").submit(function(event) {
    const userInput = $("#customPizzaInput").val();
 
    });
    event.preventDefault();
  });
});



// const veggieToppings = ["Olives", "Red Onions", "Mushrooms", "Bell Pepper", "Fresh Spinach", "Artichokes", "Sun-dried Tomatoes", "Pineapple", "Pesto", "Fresh Basil"]
// const meatToppings = ["Sausage", "Chicken", "Ham", "Bacon", "Pepperoni"] <<Brought to you by Veat!
// const cheeseToppings = ["Parmesan", "Cheddar", "Feta", "Mozzarella", "Smoked Gouda", "Ricotta"]


// // Write out thought process of what needs to happen:
// * users should be create personalized pizzas with multiple topping choices (will that mean that each type of topping exists in an array. that means I have to declare functions with different kind of toppings they can add 
// for UI logic later look up how to display an array as a list or input in html.
// Should first two toppings be free? How would I write function for that, because it would have to entail veggies, meats, and cheese.
// pizza should also have function that has basic cost - that cost should be coming from the pizza size the user picks
//also functions with how much each topping property should cost each time they add one)
// * Business - Then function needs to add the cost each time the user picks an available topping. UI - They can choose from a top down menu that will add each topping each time or radio input kind that allows user to select multiple options.

//"This vegetarian meat substitute is locally sourced from our partnering company Veat!" (Create logo with registered trademark!) "Their mission statement is to bring health and flavor together in a whirlwind to bring you peace of mind and a happy stomach!! All their Veat products are made from a combination of black beans, pinto beans, soy, vegetables, and herbs."
// //