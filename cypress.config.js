const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'rvsd46',
  viewportWidth: 1280,
  viewportHeight: 720,
  retries: {
    "runMode": 2,  // Number of retries when running tests via cypress run.
    "openMode": 1  // Number of retries when running tests via cypress open.
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },defaultCommandTimeout:10000
  // resolution
  // 
});

