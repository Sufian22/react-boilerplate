exports.config = {
  helpers: {
    WebDriverIO: {
      // load variables from the environment and provide defaults
      url: 'http://gui:5000',
      host: 'selenium-server',
      port: 4444,
      browser: 'chrome',
      coloredLogs: true,
    },
  },

  // here goes config as it was in codecept.json
  include: {},
  bootstrap: false,
  mocha: {},
  name: 'gui',
  tests: './*_test.js',
  timeout: 10000,
  output: './output',
};
