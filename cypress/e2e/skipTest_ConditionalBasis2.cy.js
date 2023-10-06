describe('conditionally disable test in Cypress using plugin', () => {

    it("Skip on Window, Open URL and add product to cart", () => {
        cy.skipOn('windows')
        cy.visit("https://bstackdemo.com/")
        cy.get('.shelf-item__buy-btn').first().click();

    });

    it("skip on MAC, Open URL and add product to cart", () => {
        cy.skipOn('mac')
        cy.visit("https://bstackdemo.com/")
        cy.get('.shelf-item__buy-btn').first().click();

    });

})
