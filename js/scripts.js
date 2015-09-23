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
  var additionalToppings = this.pizzaTopping.length;
  var additionalCost = additionalToppings * 2;
  return additionalCost;
}

$(document).ready(function() {
      $("#additional-topping").click(function(event) {
      event.preventDefault();
          $("#more-toppings").append('<div class="form-group">' +
                                        '<select id="add-topping">' +
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
      console.log(pizzaSize);
      var pizzaQuantity = parseInt($("input#pizza-quantity").val());
      console.log(pizzaQuantity);
      var pizzaTopping = [];

    $(".pizza-toppings").each(function() {
      pizzaTopping.push($("select#pizza-topping").val());
    });

    $("#add-topping").each(function() {
      if (($("select#add-topping").val()) != undefined) {
        pizzaTopping.push($("select#add-topping").val());
      }
    });


    var newPizza = new Pizza(pizzaQuantity, pizzaTopping, pizzaSize);
    var totalBill = (newPizza.calculateBaseCost() + newPizza.calculateAdditionalCost());
    console.log(newPizza.pizzaTopping);
    console.log(totalBill);
    $("#cost").text("$" + totalBill);
    $("#total-cost").show();

  });

});
