// import { test } from '@playwright/test';

// test.only('Print phone name and price', async ({ page }) => {

//   await page.goto("https://www.amazon.com/s?k=phones&crid=2VY0UMJR7B4NI&sprefix=phon%2Caps%2C384&ref=nb_sb_noss_2");

//   const details = await page
//     .locator('//div[@data-component-type="s-search-result"]//h2/span | //div[@data-component-type="s-search-result"]//span[@class="a-price-whole"]')
//     .allTextContents();

//   console.log(details);

// });

import { test } from '@playwright/test';
// import { Expect } from '@playwright/test';

test('get by methods', async ({ page }) => {

  await page.goto("https://practicetestautomation.com/practice-test-login/");
//   await page.getByLabel("Username", {exact:true}).fill("Student")
//   await page.getByLabel("Password").fill("Password123")
//   await page.getByText("Submit").first().click();

  await page.getByRole("textbox",{name:"Username",exact:true}).fill("gbhn");
  await page.getByPlaceholder('Enter your name')

});