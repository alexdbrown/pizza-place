describe('PizzaPlace', function() {
  it("allows a user to order one pizza with quantity, toppings and size options", function() {
    var testPizzaPlace = new PizzaPlace(1, "Cheese", "Large", 15);
    expect(testPizzaPlace.pizzaQuantity).to.equal(1);
    expect(testPizzaPlace.pizzaTopping).to.equal("Cheese");
    expect(testPizzaPlace.pizzaSize).to.equal("Large");
    expect(testPizzaPlace.pizzaCost).to.equal(15);

  });

  it("allows a user to order more than one pizza with given specifications", function() {
    var testPizzaPlace = newPizzaPlace(2, "Cheese, Sausage", "Medium, Small");
    expect(testPizzaPlace.pizzaQuantity).to.equal(2);
    expect(testPizzaPlace.pizzaTopping).to.equal("Cheese, Sausage");
    expect(testPizzaPlace.pizzaSize).to.equal("Medium, Small");
    expect(testPizzaPlace.pizzaCost).to.equal(30);

  });
});
