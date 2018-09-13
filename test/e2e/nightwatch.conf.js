require('@babel/register');

module.exports = {
  src_folders: ['test/e2e/specs'],
  output_folder: 'test/e2e/reports',
  custom_assertions_path: ['test/e2e/custom-assertions'],

  test_settings: {
    default: {
      launch_url: 'http://wefloc.com:8080',
      silent: true,
      selenium_host: 'hub',
      desiredCapabilities: {
        browserName: 'chrome',
      },
      screenshots: {
        enabled: true,
        on_failure: true,
        path: 'tests_output/screenshots',
      },
    },
    chrome: {
      desiredCapabilities: {
        browserName: 'chrome',
      },
    },
    firefox: {
      desiredCapabilities: {
        browserName: 'firefox',
      },
    },
  },
};
