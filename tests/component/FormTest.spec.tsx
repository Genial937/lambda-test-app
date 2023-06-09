import React from 'react';
import { test, expect } from '@playwright/experimental-ct-react';
import Form from '../../src/components/Form'


test.use({ viewport: { width: 500, height: 1000 } });

test('Form component test', async ({ mount, page }) => {
    const component = await mount(<Form />);
    await page.locator('div').filter({ hasText: /^Name$/ }).getByRole('textbox').click();
    await page.locator('div').filter({ hasText: /^Name$/ }).getByRole('textbox').fill('Magi');
    await page.locator('div').filter({ hasText: /^Email$/ }).getByRole('textbox').click();
    await page.locator('div').filter({ hasText: /^Email$/ }).getByRole('textbox').fill('magi@gmail.com');
    await page.getByRole('button', { name: 'Submit' }).click();
});

