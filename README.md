# Vegetarian Pizza Parlor

#### Application that allows user to input custom pizza toppings and get the overall price result back.

#### By Cristina Plesa

## Technologies Used

* Javascript
* HTML
* CSS

## Description

This application relies on a constructor function within Javascript, allowing users to create unique pizzas on the webpage. Once the topping information has been inputted, other functions in Javascript work to add all charges together and return a price result to the user.

## Setup/Installation Requirements

* Clone from GitHub: $ git clone https://github.com/CristinaPlesa/Pizza-parlor
* Navigate to the top level of the directory.
* Open index.html in your browse

## Specs/Tests

### Describe: (Constructor) function Pizza() {} Pass
* Test: "It should allow the creation of pizza objects with multiple attributes"
  * Code: let pizza = new Pizza(["Olives"], ["Chicken"], ["Cheddar"], ["Large"]);
    console.log(pizza);
  * Expected Output: Pizza {veggies: ["Olives"], meats: ["Chicken"], cheeses: ["Cheddar"], size: ["Large"]}

### Describe: Pizza.prototype.veggiePrice = function() {} Pass
* Test: "It should find the number of veggies the user picked and multiply it by the veggie topping price. The first topping of veggies should be free"
  * Code: let pizza = new Pizza(["Olives", "Red Onions", "Fresh Spinach"], ["Chicken"], ["Cheddar"], ["Large"]);
    console.log(pizza.veggiePrice())
  * Expected Output: 0.5

### Describe: Pizza.prototype.meatPrice = function() {} Pass
* Test: "It should find the number of meats the user picked and only charge them for each one after the first"
  * Code: let pizza = new Pizza(["Fresh Spinach"], ["Chicken", "Bacon", "Pepperoni"], ["Cheddar"], ["Large"]);
    console.log(pizza.meatPrice());
  * Expected Output: 1.5

### Describe: Pizza.prototype.cheesePrice = function() {} Pass
* Test: "It should find the number of extra cheeses the user picked and charge them 50 cents for each one"
  * Code: let pizza = new Pizza(["Fresh Spinach"], ["Chicken"], ["Cheddar", "Smoked Gouda", "Parmesan", "Feta"], ["Large"]);
    console.log(pizza.cheesePrice());
  * Expected Output: 2

### Describe: Pizza.prototype.sizePrice = function() {} Pass
* Test: "It should adjust the base price of the pizza depending on which size the user picks"
  * Code: let smallPizza = new Pizza(["Fresh Spinach"], ["Chicken"], ["Cheddar"], 0);
    let largePizza = new Pizza(["Fresh Spinach"], ["Chicken"], ["Cheddar"], 2);
    console.log(smallPizza.sizePrice());
    console.log(largePizza.sizePrice());
  * Expected Output: 5, 7

### Describe: Pizza.prototype.totalPrice = function() {}
* Test: "It should add the Pizza toppings and size price together and return the price total"
  * Code: let pizza = new Pizza(["Olives", "Red Onions", "Fresh Spinach", "Artichokes", "Fresh Basil"], ["Chicken"], ["Cheddar", "Smoked Gouda", "Parmesan"], ["Large"]);
  console.log(pizza.totalPrice());
  * Expected Output: 9.5

* Test:
  * Code: 
  * Expected Output:

* Test:
  * Code: 
  * Expected Output:

* Test:
  * Code: 
  * Expected Output:

* Test:
  * Code: 
  * Expected Output:

## Known Bugs

* 

## License

MIT Copyright (c) 2021 Cristina Plesa

## Contact Information

Add a new issue to this repo to contact me about any issues.