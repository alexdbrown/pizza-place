describe('Pizza', function() {
  it("allows a user to order one pizza with quantity, toppings and size options", function() {
    var testPizza = new Pizza(1, "Cheese", "Large", 15);
    expect(testPizza.pizzaQuantity).to.equal(1);
    expect(testPizza.pizzaTopping).to.equal("Cheese");
    expect(testPizza.pizzaSize).to.equal("Large");
    expect(testPizza.pizzaCost).to.equal(15);

  });

  it("allows a user to order more than one pizza with given specifications", function() {
    var testPizza = new Pizza(2, "Cheese, Sausage", "Medium, Small", 30);
    expect(testPizza.pizzaQuantity).to.equal(2);
    expect(testPizza.pizzaTopping).to.equal("Cheese, Sausage");
    expect(testPizza.pizzaSize).to.equal("Medium, Small");
    expect(testPizza.pizzaCost).to.equal(30);
  });
});

describe('')
