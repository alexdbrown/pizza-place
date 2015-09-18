function Pizza(pizzaQuantity, pizzaTopping, pizzaSize) {
  this.pizzaQuantity = pizzaQuantity;
  this.pizzaTopping = pizzaTopping;
  this.pizzaSize = pizzaSize;
  // this.pizzaCost = pizzaCost;
};


Pizza.prototype.calculateBaseCost = function() {
  var pizzaCost = 0 ;
  var pizzaBaseCostArray = this.pizzaSize.split(", ");

  for (var i = 0; i < pizzaBaseCostArray.length; i++) {
    if (pizzaBaseCostArray[i] === "Small") {
      pizzaCost = pizzaCost + 10;
    } else if (pizzaBaseCostArray[i] === "Medium") {
      pizzaCost = pizzaCost + 12;
    } else if (pizzaBaseCostArray[i] === "Large") {
      pizzaCost = pizzaCost + 15;
    }
  }
  return pizzaCost;
}


Pizza.prototype.calculateAdditionalCost = function () {

  var pizzaToppingArray = this.pizzaTopping.split(", ");
  var additionalToppings = pizzaToppingArray.length;
  var additionalCost = additionalToppings * 2;
  return additionalCost;
}
