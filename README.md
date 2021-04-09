# _{Application Name}_

#### _{Brief description of application}_

#### By _**{List of contributors}**_

## Technologies Used

* _List all_
* _the major technologies_
* _you used in your project_
* _here_

## Description

_{This is a detailed description of your application. Give as much detail as needed to explain what the application does as well as any other information you want users or other developers to have.}_

## Setup/Installation Requirements

* _This is a great place_
* _to list setup instructions_
* _in a simple_
* _easy-to-understand_
* _format_

_{Leave nothing to chance! You want it to be easy for potential users, employers and collaborators to run your app. Do I need to run a server? How should I set up my databases? Is there other code this application depends on? We recommend deleting the project from your desktop, re-cloning the project from GitHub, and writing down all the steps necessary to get the project working again.}_

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

* Test:
  * Code: 
  * Expected Output:

## Known Bugs

* _Any known issues_
* _should go here_

## License

_{Let people know what to do if they run into any issues or have questions, ideas or concerns.  Encourage them to contact you or make a contribution to the code.}_

## Contact Information

_{Add your contact information here.}_