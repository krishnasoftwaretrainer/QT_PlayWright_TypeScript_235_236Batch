import { test, expect } from '@playwright/test';

test('Accept Alert', async ({ page }) => { 

await page.goto('https://demo.automationtesting.in/Alerts.html');
 await page.pause();
await page.waitForTimeout(2000);
 page.on('dialog', async dialog => {
console.log('Alert Message:', dialog.message());
console.log('Alert Type:', dialog.type());
await dialog.accept();
await page.waitForTimeout(2000);
 });
await page.waitForTimeout(2000);
 const displayalert=page.locator('//button[@onclick="alertbox()"]');
 await displayalert.click();
await page.waitForTimeout(3000);
 console.log('Alert Accepted Successfully');
 });

 test('Accept/Dismiss Alert', async ({ page }) => { 

await page.goto('https://demo.automationtesting.in/Alerts.html');
 await page.pause();
await page.waitForTimeout(2000);

 page.on('dialog', async dialog => {
console.log('Alert Message:', dialog.message());
console.log('Alert Type:', dialog.type());
// await dialog.dismiss();
await dialog.accept();
await page.waitForTimeout(2000);
 });

await page.waitForTimeout(2000);
 const alertOKCANCEL=page.locator('//a[@href="#CancelTab"]');
 await alertOKCANCEL.click();
await page.waitForTimeout(3000);

 const displayConfirmBox=page.locator('//button[@onclick="confirmbox()"]');
 await displayConfirmBox.click();
await page.waitForTimeout(3000);

 const afterAlertMsg=page.locator('#demo');
console.log('After Alert Message:', await afterAlertMsg.innerText());

 console.log('Alert Dismissed Successfully');
 });

 test.only('Enter text and accept alert', async ({ page }) => { 

await page.goto('https://demo.automationtesting.in/Alerts.html');
 await page.pause();
await page.waitForTimeout(2000);

 page.on('dialog', async dialog => {
console.log('Alert Message:', dialog.message());
console.log('Alert Type:', dialog.type());
await dialog.dismiss();
//await dialog.accept('Play Wright Testing');
await page.waitForTimeout(2000);
 });

await page.waitForTimeout(2000);
 const alertwithtextbox=page.locator('//a[@href="#Textbox"]');
 await alertwithtextbox.click();
await page.waitForTimeout(3000);

 const promptbox=page.locator('//button[@onclick="promptbox()"]');
 await promptbox.click();
await page.waitForTimeout(3000);

 const afterAlertMsg=page.locator('#demo1');
console.log('After Alert Message:', await afterAlertMsg.innerText());

 console.log('Text Entered and Alert Accepted Successfully');
 });