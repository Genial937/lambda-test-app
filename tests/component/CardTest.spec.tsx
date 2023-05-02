import React from 'react';
import { test, expect } from '@playwright/experimental-ct-react';
import Card from '../../src/components/Card'


test.use({ viewport: { width: 500, height: 1000 } });

test('Form component test', async ({ page, mount }) => {
    const component = await mount(<Card />);
    await page.locator('div').filter({ hasText: /^Name$/ }).getByRole('textbox').click();
    await page.locator('div').filter({ hasText: /^Name$/ }).getByRole('textbox').fill('Magi');
    await page.locator('div').filter({ hasText: /^Email$/ }).getByRole('textbox').click();
    await page.locator('div').filter({ hasText: /^Email$/ }).getByRole('textbox').fill('magi@gmail.com');
    await page.getByRole('button', { name: 'Submit' }).click();
});

