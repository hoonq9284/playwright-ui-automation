// playwright.config.js

/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
  testDir: './tests',
  timeout: 30000,
  expect: {
    timeout: 5000
  },
  retries: 0,
  reporter: [['html', { open: 'never' }]],
  use: {
    headless: false,
    viewport: { width: 1920, height: 1080 },
    ignoreHTTPSErrors: true,
    screenshot: 'on',
    video: 'retain-on-failure',
    baseURL: 'https://www.saucedemo.com',
    trace: 'on-first-retry'
  }
};

export default config;