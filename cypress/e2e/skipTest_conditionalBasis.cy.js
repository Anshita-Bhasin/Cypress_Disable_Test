describe("Conditionally disable test in cypress using plugin", ()  => {

     it("Only on Chrome, Open URL and add product to cart", () => {
          cy.onlyOn('chrome')
          cy.visit(
               "https://bstackdemo.com/")
          cy.get('.shelf-item__buy-btn').first().click();

    });
    it("Only on Firefox, Open URL and add product to cart", () => {
          cy.onlyOn('firefox')
          cy.visit(
               "https://bstackdemo.com/")
         cy.get('.shelf-item__buy-btn').first().click();

    });

})
