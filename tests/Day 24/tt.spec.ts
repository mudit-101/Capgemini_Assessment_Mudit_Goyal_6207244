// import { test } from '@playwright/test'
// test('handle new tab without Promise.all', async ({ page, context }) => {

//   const pagePromise = context.waitForEvent('page'); // 👈 start listening

//   await page.click('a[target="_blank"]'); // 👈 trigger action
// await page.waitForTimeout(3000)
//   const newPage = await pagePromise; // 👈 get new tab
//   await newPage.waitForLoadState();

//   console.log(await newPage.title());
// });