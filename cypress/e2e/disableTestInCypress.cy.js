describe("Disable Cypress Test", () => {
    it.skip("Tc1 - Disable test using.skip()", function () {
        cy.visit("https://bstackdemo.com/");
        cy.get('.shelf-item__buy-btn').first().click();

    });
    it("Tc2 - Disable test using.skip()", function () {
        cy.visit("https://bstackdemo.com/");
        cy.get('.shelf-item__buy-btn').eq(1).click();
    });
});
