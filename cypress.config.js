const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'wiihzt',
  viewportWidth: 1280,
  viewportHeight: 720,
  chromeWebSecurity: false,
  defaultCommandTimeout:10000,
  videosFolder: 'cypress/videos',
  screenshotsFolder: 'cypress/screenshots',
  cacheAcrossSpecs: true,
  video: true,
  env: {
    // Environment variables
    CYPRESS_RECORD_KEY: process.env.CYPRESS_RECORD_KEY,
    location: 'india'
  },
  retries: {
    "runMode": 2,  // Number of retries when running tests via cypress run.
    "openMode": 1  // Number of retries when running tests via cypress open.
  },

  e2e: {
    baseUrl: 'https://www.amazon.in',
    setupNodeEvents(on, config) {

      // implement node event listeners here
    },

  },
  

  // resolution
  // 
});

