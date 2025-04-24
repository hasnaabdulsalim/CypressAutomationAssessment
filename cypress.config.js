const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');
module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  env: {
    url : 'https://magento.softwaretestingboard.com/'
  },
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      allureWriter(on, config);
      return config;
    },
  },
  viewportHeight: 800,
  viewportWidth: 1440,
});
