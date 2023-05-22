const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false,
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    baseUrl : "https://itera-qa.azurewebsites.net/",
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    defaultCommandTimeout: 5000,
    pageLoadTimeout: 100000,
    screenshotOnRunFailure : true,
    // reporter: "cypress-testrail-reporter",
    //   reporterOptions: {
    //   host: "https://aldiankarim.testrail.io/",
    //   username: "aldiangg99@gmail.com",
    //   password: "56Cilandak2014!",
    //   projectId: 3,
    //   suiteId: 5,
// }

  },
});
