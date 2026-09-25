import { test, expect } from '@playwright/test';

test('Upload Single File', async ({ page }) => { 
await page.goto('https://demo.automationtesting.in/FileUpload.html');
 await page.pause();

 const upload=page.locator('#input-4');

 await upload.setInputFiles('C:\\Users\\HP\\OneDrive\\Pictures\\Screenshots\\Screenshot 2026-08-22 175857.png');

 console.log('File Uploaded Successfully');

 });

 test('Upload Multiple Files', async ({ page }) => { 
await page.goto('https://demo.automationtesting.in/FileUpload.html');
 await page.pause();

 const upload=page.locator('#input-4');

 await upload.setInputFiles(['C:\\Users\\HP\\OneDrive\\Pictures\\Screenshots\\Screenshot 2026-08-22 175857.png','C:\\Users\\HP\\OneDrive\\Pictures\\Screenshots\\Screenshot 2026-08-28 153940.png','C:\\Users\\HP\\OneDrive\\Pictures\\Screenshots\\Screenshot 2026-08-22 180122.png']);

 console.log('File Uploaded Successfully');

 });

 test.only('Clear the uploaded Files', async ({ page }) => { 
await page.goto('https://demo.automationtesting.in/FileUpload.html');
 await page.pause();

 const upload=page.locator('#input-4');

 await upload.setInputFiles(['C:\\Users\\HP\\OneDrive\\Pictures\\Screenshots\\Screenshot 2026-08-22 175857.png','C:\\Users\\HP\\OneDrive\\Pictures\\Screenshots\\Screenshot 2026-08-28 153940.png','C:\\Users\\HP\\OneDrive\\Pictures\\Screenshots\\Screenshot 2026-08-22 180122.png']);
await upload.setInputFiles([]); // Clear the uploaded files
 console.log('File Uploaded Successfully');

 });