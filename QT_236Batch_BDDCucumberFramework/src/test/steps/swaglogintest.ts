import { Given, When, Then } from '@cucumber/cucumber';
import { chromium, Browser, Page } from '@playwright/test';
import { expect } from '@playwright/test';
import { setDefaultTimeout } from '@cucumber/cucumber';

setDefaultTimeout(30000);
let browser: Browser;
let page: Page;

Given('The user is on the login page', async function () 
{
browser = await chromium.launch({ headless: false });
  page = await browser.newPage();

  await page.goto('https://www.saucedemo.com/');
});

When('The user enters a username {string}', async function (username) {
  await page.locator('[data-test="username"]').fill(username);
});

When('The user enters a password {string}', async function (password) {
  await page.locator('[data-test="password"]').fill(password);
});

When('The user clicks the login button', async function () {
  await page.locator('[data-test="login-button"]').click();
});


Then('The user should be logged into SwagLabs', async function () {
await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
//await browser.close();
});