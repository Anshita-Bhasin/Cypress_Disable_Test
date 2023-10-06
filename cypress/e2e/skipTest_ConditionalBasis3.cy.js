import { onlyOn, skipOn } from '@cypress/skip-test'

describe("conditionally disable test in cypress using plugin", () => {
    it("Skip on Windows - Open website and click on product", () => {
        skipOn('windows')
        cy.visit(
            "https://bstackdemo.com/")
        cy.get('.shelf-item__buy-btn').first().click();

    });

    it("Only on Firefox - Open website and click on product", () => {
        onlyOn('firefox')
        cy.visit(
            "https://bstackdemo.com/")
        cy.get('.shelf-item__buy-btn').first().click();

    });

});
