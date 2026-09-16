import { test, expect } from '@playwright/test';

test('Testing Case-1', async ({ page }) => { 

  await page.goto('https://www.saucedemo.com/');
 await page.waitForTimeout(3000); 
 
  const ttile=page.url();
  console.log('URL:',ttile);

});

test('Testing Case-2', async ({ page }) => { 

  await page.goto('https://www.facebook.com/');
 await page.waitForTimeout(3000); 
 
  const ttile=page.url();
  console.log('URL:',ttile);

});

test('Testing Case-3', async ({ page }) => { 

  await page.goto('https://www.amazon.in/');
 await page.waitForTimeout(3000); 
 
  const ttile=page.url();
  console.log('URL:',ttile);

});