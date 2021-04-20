// Business Logic for Pizza
function Pizza(veggies, meats, cheeses, size) {
  this.veggies = veggies;
  this.meats = meats;
  this.cheeses = cheeses;
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

// UI Logic
$(document).ready(function() {
  $("#customPizzaInput").submit(function(event) {
    event.preventDefault();
    const veggieArray = [];
    const meatArray = [];
    const cheeseArray = [];
    $('input[class=veggie]').each(function () {
      if (this.checked) {
        veggieArray.push($(this).val());
      }
    });
    $('input[class=meat]').each(function () {
      if (this.checked) {
        meatArray.push($(this).val());
      }
    });
    $('input[class=cheese]').each(function () {
      if (this.checked) {
        cheeseArray.push($(this).val());
      }
    });

    const sizeInput = parseInt($('input:radio[name=size]:checked').val());

    const pizza = new Pizza(veggieArray,meatArray,cheeseArray,sizeInput);
    $("#outputResults").text(pizza.totalPrice());
  });
});




//"This vegetarian meat substitute is locally sourced from our partnering company Veat!" (Create logo with registered trademark!) "Their mission statement is to bring health and flavor together in a whirlwind to bring you peace of mind and a happy stomach!! All their Veat products are made from a combination of black beans, pinto beans, soy, vegetables, and herbs."//