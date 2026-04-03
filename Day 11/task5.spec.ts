import { test } from "@playwright/test";

test("Amazon", async ({ page }) => {

  await page.goto("https://www.amazon.in/");

  await page.locator("//input[@placeholder='Search Amazon.in']").fill("phones");
  await page.locator("#nav-search-submit-button").click();

  // wait until filter appears
  await page.locator('//span[text()="Android 14"]').waitFor();

  await page.locator('//span[text()="Android 14"]/preceding::input[@type="checkbox"][1]').click();

});