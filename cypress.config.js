const { defineConfig } = require("cypress");

module.exports = defineConfig({

  e2e: {
    excludeSpecPattern: [
      "cypress/e2e/**/homePage.cy.js",
      "cypress/e2e/**/productPage.cy.js"
    ],
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
