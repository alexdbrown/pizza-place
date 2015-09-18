function Pizza(pizzaQuantity, pizzaTopping, pizzaSize) {
  this.pizzaQuantity = pizzaQuantity;
  this.pizzaTopping = pizzaTopping;
  this.pizzaSize = pizzaSize;
  // this.pizzaCost = pizzaCost;
};

Pizza.prototype.calculateCost = function() {
  // var smallPizza = Small;
  // var mediumPizza = Medium;
  // var largePizza = Large;
  var pizzaCost = "";

  if (this.pizzaSize === "Small") {
    pizzaCost = 10;
  } else if (this.pizzaSize === "Medium") {
    pizzaCost = 12;
  } else if (this.pizzaSize === "Large") {
    pizzaCost = 15;
  }

  return pizzaCost;


};
