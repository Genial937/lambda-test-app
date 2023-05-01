import { test, expect } from '@playwright/test';
const { chromium } = require('playwright')

test('test', async () => {
    const capabilities = {
        'browserName': 'MicrosoftEdge', // Browsers allowed: `Chrome`, `MicrosoftEdge`, `pw-chromium`, `pw-firefox` and `pw-webkit`
        'browserVersion': 'latest',
        'LT:Options': {
            'platform': 'MacOS Big sur',
            'build': 'Playwright Sample Build',
            'name': 'Playwright Sample Test',
            'user': process.env.LT_USERNAME || 'odenyothadeus',
            'accessKey': process.env.LT_ACCESS_KEY || 'HnGn524yuc5d3Ncn3iOqU632c0m4jzd1ibcQelj0XMOarTYo7X',
            'network': true,
            'video': true,
            'console': true
        }
    }

    const browser = await chromium.connect({
        wsEndpoint: `wss://cdp.lambdatest.com/playwright?capabilities=${encodeURIComponent(JSON.stringify(capabilities))}`
    })

    const page = await browser.newPage()
    await page.goto('https://www.bing.com')

    const element = await page.$('[aria-label="Enter your search term"]');
    await element.click()
    await element.type('LambdaTest')
    await element.press('Enter')
    const title = await page.title()
    try {
        expect(title).toEqual('LambdaTest - Search')
        // Mark the test as completed or failed
        await page.evaluate(_ => { }, `lambdatest_action: ${JSON.stringify({ action: 'setTestStatus', arguments: { status: 'passed', remark: 'Title matched' } })}`)
    } catch {
        await page.evaluate(_ => { }, `lambdatest_action: ${JSON.stringify({ action: 'setTestStatus', arguments: { status: 'failed', remark: 'Title not matched' } })}`)
    }

    await browser.close()
});