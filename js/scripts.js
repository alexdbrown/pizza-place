function Pizza(pizzaQuantity, pizzaTopping, pizzaSize) {
  this.pizzaQuantity = pizzaQuantity;
  this.pizzaTopping = pizzaTopping;
  this.pizzaSize = pizzaSize;
  // this.pizzaCost = pizzaCost;
};


Pizza.prototype.calculateBaseCost = function() {
  var pizzaCost = 0 ;
  var pizzaCostArray = this.pizzaSize.split(", ");

  for (var i = 0; i < pizzaCostArray.length; i++) {
    if (pizzaCostArray[i] === "Small") {
      pizzaCost = pizzaCost + 10;
    } else if (pizzaCostArray[i] === "Medium") {
      pizzaCost = pizzaCost + 12;
    } else if (pizzaCostArray[i] === "Large") {
      pizzaCost = pizzaCost + 15;
    }
  }
  return pizzaCost;

  debugger;


};
