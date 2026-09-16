import { test, expect } from '@playwright/test';

test('Testing Script', async ({ page }) => {  //Open Browser

  await page.goto('https://www.saucedemo.com/');  //Enter URL
 await page.waitForTimeout(3000);  //Wait for 3 seconds
 //await page.pause();  //Pause the execution of the script
  const ttile=page.url();
  console.log('URL:',ttile);


  // // Expect a title "to contain" a substring.
  // await expect(page).toHaveTitle(/Playwright/);
});

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });
