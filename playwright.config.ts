import { defineConfig, devices } from '@playwright/test';
import { defineBddConfig } from 'playwright-bdd';

export const GLOBAL_TIMEOUT = 30000;

const testDir = defineBddConfig({
  paths: ['features/*.feature'],
  steps: 'features/step_definitions/loginSteps.ts',
});

export default defineConfig({
  testDir,
  fullyParallel: false,
  workers: 1,
  reporter: 'html',
  timeout: GLOBAL_TIMEOUT,

  use: {
    headless: process.env.CI ? true : false,
    actionTimeout: GLOBAL_TIMEOUT,
    navigationTimeout: GLOBAL_TIMEOUT,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'on-first-retry',
    locale: 'en-GB',
    ignoreHTTPSErrors: true,
    launchOptions: {
      args: ['--start-maximized'],
    },
  },

  projects: [
    {
      name: 'Chrome',
      use: { ...devices['Desktop Chrome'], 
        isMobile: false,
        deviceScaleFactor: undefined,
        viewport: null,
      },
    },

    { name: 'Edge', 
      use: { ...devices['Desktop Edge'], 
        isMobile: false,
        deviceScaleFactor: undefined,
        viewport: null,
      },
    },

    {
      name: 'Firefox',
      use: { ...devices['Desktop Firefox'], 
        isMobile: false,
        deviceScaleFactor: undefined,
        viewport: null,
      },
    },

    {
      name: 'Android',
      use: { ...devices['Pixel 5'], isMobile: true },
    },

  ],

});
