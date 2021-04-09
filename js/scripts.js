// Business Logic for Pizza
function Pizza(veggie, meat, cheese, size) {
  this.veggieToppings = veggie;
  this.meatToppings = meat;
  this.cheeseToppings = cheese;
  // this.toppings = {};
  this.size = size;
}

let pizza = new Pizza("Olives", "Chicken", "Cheddar", "Large")
console.log(pizza);