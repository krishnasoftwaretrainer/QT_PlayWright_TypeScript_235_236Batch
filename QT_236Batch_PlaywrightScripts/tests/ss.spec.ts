import { test } from '@playwright/test';

test('Multiple Tabs', async ({ context }) => {

    const page1 = await context.newPage();
    await page1.goto('https://www.saucedemo.com/');

    const page2 = await context.newPage();
    await page2.goto('https://www.google.com/');

});