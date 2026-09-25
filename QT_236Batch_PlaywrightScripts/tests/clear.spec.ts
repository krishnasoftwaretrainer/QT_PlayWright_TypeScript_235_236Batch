import {test,expect} from '@playwright/test';

test('fill method: Clear text in textbox or text area', async ({page}) => {
await page.goto('https://www.saucedemo.com/');
await page.waitForTimeout(2000); 

const username=page.getByRole('textbox', { name: 'Username' });

await username.fill('gfsdjfsdj');
await page.waitForTimeout(2000); 
username.clear();
 await page.waitForTimeout(2000); 
await username.fill('secret_sauce');
await page.waitForTimeout(2000); 
});

test.only('type method: Clear text in textbox or text area', async ({page}) => {
await page.goto('https://www.saucedemo.com/');
await page.waitForTimeout(2000); 

const username=page.getByRole('textbox', { name: 'Username' });

await username.type('gfsdjfsdj');
await page.waitForTimeout(2000); 
username.clear();
 await page.waitForTimeout(2000); 
await username.type('secret_sauce');
await page.waitForTimeout(2000); 
});