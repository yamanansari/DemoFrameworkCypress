const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'rvsd46',
  viewportWidth: 1280,
  viewportHeight: 720,
  defaultCommandTimeout:10000,
  videosFolder: 'cypress/videos',
  screenshotsFolder: 'cypress/screenshots',
  video: true,
  env: {
    // Environment variables
    CYPRESS_RECORD_KEY: process.env.CYPRESS_RECORD_KEY,
  },
  retries: {
    "runMode": 2,  // Number of retries when running tests via cypress run.
    "openMode": 1  // Number of retries when running tests via cypress open.
  },

  e2e: {
    setupNodeEvents(on, config) {

      // implement node event listeners here
    },

  },
  component: {
  
    devServer: {
      framework: 'react',
      bundler: 'webpack',
    },
  },
  

  // resolution
  // 
});

