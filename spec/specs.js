describe('PizzaPlace', function() {
  it("allows a user to create one pizza with quantity, toppings and size options", function() {
    var testPizzaPlace = new PizzaPlace(1, "Pepperoni", "Large");
    expect(testPizzaPlace.pizzaQuantity).to.equal(1);
    expect(testPizzaPlace.pizzaTopping).to.equal("Pepperoni");
    expect(testPizzaPlace.pizzaSize).to.equal("Large");
  });
});
