describe( 'My test suite', () => {
    it.only('TC1 - test case', () => {
        cy.visit("https://bstackdemo.com/")
            cy.log("=== test case 1 ====")
        })

    it('TC2 - Skipped test case', () => {
        cy.visit("https://bstackdemo.com/")
            cy.log("=== test case 2 ====")
        })

    it.only('TC3 - test case' , () => {
        cy.visit("https://bstackdemo.com/")
            cy.log("=== test case 3 ====")
        })
})
