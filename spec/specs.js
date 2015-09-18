describe('Pizza', function() {
  it("allows a user to order one pizza with quantity, toppings and size options", function() {
    var testPizza = new Pizza(1, "Cheese", "Large");
    expect(testPizza.pizzaQuantity).to.equal(1);
    expect(testPizza.pizzaTopping).to.equal("Cheese");
    expect(testPizza.pizzaSize).to.equal("Large");
    // expect(testPizza.totalCost).to.equal(15);

  });

  it("allows a user to order one pizza with more than one topping", function() {
    var testPizza = new Pizza(1, "Cheese, Sausage", "Medium");
    expect(testPizza.pizzaQuantity).to.equal(1);
    expect(testPizza.pizzaTopping).to.equal("Cheese, Sausage");
    expect(testPizza.pizzaSize).to.equal("Medium");
    // expect(testPizza.pizzaCost).to.equal(30);
  });

  it("allows a user to order multiple pizzas with more than one topping", function() {
    var testPizza = new Pizza(2, "Cheese, Onion, Bacon", "Small, Large");
    expect(testPizza.pizzaQuantity).to.equal(2);
    expect(testPizza.pizzaTopping).to.equal("Cheese, Onion, Bacon");
    expect(testPizza.pizzaSize).to.equal("Small, Large");
  });
});

describe("Pizza.calculateBaseCost", function() {
  it("costs $15 for one large pizza", function () {
    var testPizza = new Pizza(1, "Cheese", "Large");
    expect(testPizza.calculateBaseCost()).to.equal(15);
  });

  it("costs $25 for one small pizza and one large pizza", function () {
    var testPizza = new Pizza(2, "Cheese", "Small, Large");
    expect(testPizza.calculateBaseCost()).to.equal(25);
  });
});
