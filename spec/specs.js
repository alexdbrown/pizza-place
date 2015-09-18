describe('Pizza', function() {
  it("allows a user to order one pizza with quantity, toppings and size options", function() {
    var testPizza = new Pizza(1, "Sausage", "Large");
    expect(testPizza.pizzaQuantity).to.equal(1);
    expect(testPizza.pizzaTopping).to.equal("Sausage");
    expect(testPizza.pizzaSize).to.equal("Large");
    // expect(testPizza.totalCost).to.equal(15);

  });

  it("allows a user to order one pizza with more than one topping", function() {
    var testPizza = new Pizza(1, "Pineapple, Sausage", "Medium");
    expect(testPizza.pizzaQuantity).to.equal(1);
    expect(testPizza.pizzaTopping).to.equal("Pineapple, Sausage");
    expect(testPizza.pizzaSize).to.equal("Medium");
    // expect(testPizza.pizzaCost).to.equal(30);
  });

  it("allows a user to order multiple pizzas with more than one topping", function() {
    var testPizza = new Pizza(2, "Sausage, Onion, Bacon", "Small, Large");
    expect(testPizza.pizzaQuantity).to.equal(2);
    expect(testPizza.pizzaTopping).to.equal("Sausage, Onion, Bacon");
    expect(testPizza.pizzaSize).to.equal("Small, Large");
  });
});

describe("Pizza.calculateBaseCost", function() {
  it("costs $15 for one large pizza", function () {
    var testPizza = new Pizza(1, "Sausage", "Large");
    expect(testPizza.calculateBaseCost(testPizza)).to.equal(15);
  });

  it("costs $25 for one small pizza and one large pizza", function () {
    var testPizza = new Pizza(2, "Sausage", "Small, Large");
    expect(testPizza.calculateBaseCost(testPizza)).to.equal(25);
  });
});

describe("Pizza.calculateAdditionalCost", function() {
  it("costs $2 more per additional topping (calcualte additional costs)", function() {
    var testPizza = new Pizza(2, "Sausage, Onion, Bacon", "Small, Large");
    expect(testPizza.calculateAdditionalCost(testPizza)).to.equal(6);
  });
});

//you should be able to calculate the total cost using javascript with the methods already
//created, no need to write the last spec below.

//describe("Pizza.totalCost", function() {
//   it("adds together base cost and additional costs and returns total piza cost", function() {
//     var testPizza = new Pizza(4, "Pepper, Onion, Olive, Mushroom", "Small, Large, Large, Medium");
//     expect(testPizza.totalCost()).to.equal(60);
//
//   });
// });
