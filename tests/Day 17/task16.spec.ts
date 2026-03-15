import { test, expect } from '@playwright/test';

test("task1", async ({ browser }) => {
  let context = await browser.newContext();
  let page = await context.newPage();
    await page.goto('https://www.flipkart.com/')
 await page.locator("//span[@class='b3wTlE']").click()
 await page.locator('//input[@title="Search for Products, Brands and More"]').first().fill("Samsung Mobile")
 await page.getByRole('button',{ name: 'Search for Products, Brands'}).click()
 let [page2]=await Promise.all([
 page.waitForEvent("popup"),
 page.locator('//img[@class="UCc1lI"]').first().click()])
  let title = page2.locator('//div[@class="v1zwn21k v1zwn26 _1psv1zeb9 _1psv1ze0"]').first();
  await expect(title).toBeVisible();
  console.log(await title.textContent());

});