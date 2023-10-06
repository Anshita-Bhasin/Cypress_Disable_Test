import { onlyOn, skipOn } from '@cypress/skip-test'

describe("Conditionally disable test in cypress using plugin", () => {
    it("skip on Firefox, Run only on Mac and Browser Chrome", () => {
        cy.skinOn('firefox')
        cy.onlyOn("mac").onlyOn('chrome')
        cy.visit(
            "https://bstackdemo.com/")
        cy.get('.shelf-item__buy-btn').first().click();

    })
})
