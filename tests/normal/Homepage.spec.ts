import { test, expect } from '@playwright/experimental-ct-react';

test('test', async ({ page }) => {
    //const page = await browser.newPage()

    await page.goto('https://www.bing.com')

    const element = await page.$('[aria-label="Enter your search term"]');
    await element.click()
    await element.type('LambdaTest')
    await element.press('Enter')
    const title = await page.title()
    expect(title).toEqual('LambdaTest - Search')
});