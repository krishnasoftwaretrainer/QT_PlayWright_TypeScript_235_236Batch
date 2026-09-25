import { test, expect } from '@playwright/test';

test('Download File', async ({ page }) => { 
await page.goto('https://demo.automationtesting.in/FileDownload.html');
 //await page.pause();
    const waitForDownload = page.waitForEvent('download');

 const download=page.locator('a[href="https://github.com//sakinala/AutomationTesting/raw/master/samplefile.pdf"]');

 await download.click();
    const downloadEvent = await waitForDownload;
    await downloadEvent.saveAs('tests\\Screenshots\\samplefile.pdf');
 console.log('File Downloaded Successfully');

 });

