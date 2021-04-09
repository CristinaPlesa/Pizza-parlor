// Business Logic for Pizza

function Pizza(veggie, meat, cheese, size) {
  this.veggies = veggie;
  this.meats = meat;
  this.cheeses = cheese;
  // this.toppings = {};
  this.size = size;
}




// // Write out thought process of what needs to happen:
// * users should be create personalized pizzas with multiple topping choices (will that mean that each type of topping exists in an array. that means I have to declare functions with different kind of toppings they can add 
// pizza should also have function that has basic cost or maybe that could be added to the constructor?
//also functions with how much each topping property should cost each time they add one)
// * Business - Then function needs to add the cost each time the user picks an available topping. UI - They can choose from a top down menu that will add each topping each time or radio input kind that allows user to select multiple options.
// //