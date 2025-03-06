

const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default; //a ajouter

module.exports = defineConfig({
  // reporter: "cypress-mochawesome-reporter",
  e2e: {

    chromeWebSecurity: false, // a ajouter
    specPattern: "cypress/features/**/*.feature", 

    setupNodeEvents(on, config) {
      on("file:preprocessor", cucumber());
      // require("cypress-mochawesome-reporter/plugin")(on);
    },
  },
});