function Pizza(pizzaQuantity, pizzaTopping, pizzaSize) {
  this.pizzaQuantity = pizzaQuantity;
  this.pizzaTopping = pizzaTopping;
  this.pizzaSize = pizzaSize;
  // this.pizzaCost = pizzaCost;
};


Pizza.prototype.calculateBaseCost = function() {
  var basePizzaCost = 0 ;
  var pizzaBaseCostArray = this.pizzaSize.split(", ");

  for (var i = 0; i < pizzaBaseCostArray.length; i++) {
    if (pizzaBaseCostArray[i] === "Small") {
      basePizzaCost = basePizzaCost + 10;
    } else if (pizzaBaseCostArray[i] === "Medium") {
      basePizzaCost = basePizzaCost + 12;
    } else if (pizzaBaseCostArray[i] === "Large") {
      basePizzaCost = basePizzaCost + 15;
    }
  }
  return basePizzaCost;
}


Pizza.prototype.calculateAdditionalCost = function () {

  var pizzaToppingArray = this.pizzaTopping.split(", ");
  var additionalToppings = pizzaToppingArray.length;
  var additionalCost = additionalToppings * 2;
  return additionalCost;
}

// Pizza.prototype.totalCost = function () {
//   return basePizzaCost + additionalCost;
// }
