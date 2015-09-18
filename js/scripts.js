function Pizza(pizzaQuantity, pizzaTopping, pizzaSize) {
  this.pizzaQuantity = pizzaQuantity;
  this.pizzaTopping = pizzaTopping;
  this.pizzaSize = pizzaSize;

};


Pizza.prototype.calculateBaseCost = function() {
  var basePizzaCost = 0 ;
  var pizzaBaseCostArray = this.pizzaSize.split(", ");

  for (var i = 0; i < pizzaBaseCostArray.length; i++) {
    if (pizzaBaseCostArray[i] === "Small") {
      basePizzaCost = 10 * this.pizzaQuantity;
    } else if (pizzaBaseCostArray[i] === "Medium") {
      basePizzaCost =  12 * this.pizzaQuantity;
    } else if (pizzaBaseCostArray[i] === "Large") {
      basePizzaCost = 15 * this.pizzaQuantity;
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

$(document).ready(function() {
      $("#additional-topping").click(function(event) {
      event.preventDefault();
          $("#more-toppings").append('<div class="form-group pizza-toppings">' +
                                        '<select id="topping">' +
                                          '<option value="Pepperoni">Pepperoni</option>' +
                                          '<option value="Sausage">Sausage</option>' +
                                          '<option value="Onion">Onion</option>' +
                                          '<option value="Pepper">Pepper</option>' +
                                          '<option value="Olive">Olive</option>' +
                                          '<option value="Mushroom">Mushroom</option>' +
                                          '<option value="Pineapple">Pineapple</option>' +
                                          '<option value="Tomato">Tomato</option>' +
                                        '</select>' +
                                      '</div>');
});


  $("form#pizza-order").submit(function(event) {
    event.preventDefault();

    var pizzaSize = $("select#pizza-size").val();
    var pizzaQuantity = parseInt($("input#pizza-quantity").val());
    var pizzaTopping = [];

    $(".pizza-toppings").each(function() {
      pizzaTopping.push($("select#pizza-topping").val());
      pizzaTopping.push($("select#topping").val());
    })
    var Pizza = new Pizza(pizzaSize, pizzaQuantity, pizzaTopping);

    $("#cost").text(pizza.calculateBaseCost() + pizza.calculateAdditionalCost);
    $("#total-cost").show();


  });
});
