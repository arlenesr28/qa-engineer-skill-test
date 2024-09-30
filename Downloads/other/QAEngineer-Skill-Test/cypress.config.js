const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      // on("before:browser:launch", (browser = {}, launchOptions) => {
      //   prepareAudit(launchOptions);
      // });

      // on("task", {
      //   lighthouse: lighthouse(),
      //   pa11y: pa11y(console.log.bind(console)),
      // });
    },
    "baseUrl": "https://automationexercise.com"
  },
});
