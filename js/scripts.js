// Business Logic for Pizza

function Pizza(veggies, meats, cheeses, size) {
  this.veggies = veggies;
  this.meats = meats;
  this.cheeses = cheeses;
  // this.toppings = {};
  this.size = size;
}

let Menu = {
  veggieToppings: [],
  meatToppings: [],
  cheeseToppings: []
}

// function VeggiesAvailable() {

//   veggieToppings.forEach(function(veggie)) {
//     Pizza.veggies = Pizza.veggies.push()
//   }
// }

const veggieToppings = ["Olives", "Red Onions", "Mushrooms", "Bell Pepper", "Fresh Spinach", "Artichokes", "Sun-dried Tomatoes", "Pineapple", "Pesto"]
const meatToppings = ["Sausage", "Chicken", "Ham", "Bacon", "Pepperoni"]
const cheeseToppings = ["Parmesan", "Cheddar", "Feta", "Mozzarella", "Smoked Gouda"]


// Pizza.prototype.toppingsAvailable = function() {
//   this.veggies = ["Olives", "Red Onions", "Mushrooms", "Bell Pepper", "Fresh Spinach", "Artichokes", "Sun-dried Tomatoes", "Pineapple", "Pesto"]

// }


// // Write out thought process of what needs to happen:
// * users should be create personalized pizzas with multiple topping choices (will that mean that each type of topping exists in an array. that means I have to declare functions with different kind of toppings they can add 
// for UI logic later look up how to display an array as a list or input in html.
// Should first two toppings be free? How would I write function for that, because it would have to entail veggies, meats, and cheese.
// pizza should also have function that has basic cost - that cost should be coming from the pizza size the user picks
//also functions with how much each topping property should cost each time they add one)
// * Business - Then function needs to add the cost each time the user picks an available topping. UI - They can choose from a top down menu that will add each topping each time or radio input kind that allows user to select multiple options.
// //