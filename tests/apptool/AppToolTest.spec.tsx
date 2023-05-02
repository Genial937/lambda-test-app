import { test, expect } from '@playwright/test';
const {
    VisualGridRunner,
    Eyes,
    Configuration,
    BatchInfo,
    BrowserType,
    DeviceName,
    ScreenOrientation,
    Target,
    MatchLevel
} = require('@applitools/eyes-playwright');
test.use({ viewport: { width: 500, height: 1000 } });
test.describe.configure({ mode: 'parallel' })

test.describe('A visual test', () => {
    let eyes, runner;
    test.beforeEach(async ({ page }) => {
        await page.setViewportSize({ width: 1600, height: 1200 });

        runner = new VisualGridRunner({ testConcurrency: 5 });
        eyes = new Eyes(runner);

        const configuration = new Configuration();
        configuration.setBatch(new BatchInfo('Modern Cross Browser Testing Workshop'));

        configuration.addBrowser(800, 600, BrowserType.CHROME);
        configuration.addBrowser(700, 500, BrowserType.FIREFOX);
        configuration.addBrowser(1600, 1200, BrowserType.IE_11);
        configuration.addBrowser(1024, 768, BrowserType.EDGE_CHROMIUM);
        configuration.addBrowser(800, 600, BrowserType.SAFARI);

        configuration.addDeviceEmulation(DeviceName.iPhone_X, ScreenOrientation.PORTRAIT);
        configuration.addDeviceEmulation(DeviceName.Pixel_2, ScreenOrientation.PORTRAIT);
        configuration.addDeviceEmulation(DeviceName.Galaxy_S5, ScreenOrientation.PORTRAIT);
        configuration.addDeviceEmulation(DeviceName.Nexus_10, ScreenOrientation.PORTRAIT);
        configuration.addDeviceEmulation(DeviceName.iPad_Pro, ScreenOrientation.LANDSCAPE);
        configuration.setApiKey("gqUCrK9kcO4knHGgDkaYpuXLVgSDQmR199uLto1046bptY110");
        eyes.setConfiguration(configuration);
    });

    test('test', async ({ page }) => {
        await eyes.open(page, 'Applitools Demo App', 'Login');
        await page.goto('https://auth.applitools.com/users/login');
        await eyes.check('Login page', Target.window().fully());
        await page.getByPlaceholder('Enter email').click();
        await page.getByPlaceholder('Enter email').fill('odenyothadeus@gmail.com');
        await page.getByPlaceholder('Enter password').click();
        await page.getByPlaceholder('Enter password').fill('G3n14l_@K');
        await page.getByRole('button', { name: 'Sign in', exact: true }).click();
        await expect.soft(page.locator('[data-test="learning-center-button"]')).toBeVisible();
        await eyes.check('Main page', Target.window().matchLevel(MatchLevel.Layout).fully());
        await eyes.close(false)
    });

    test.afterEach(async () => {
        await eyes.abort();

        const results = await runner.getAllTestResults(true);
        console.log('Visual test results', results);
    });
})