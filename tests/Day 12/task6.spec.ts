import { test } from "@playwright/test";

test("tokyo olympics", async ({ page }) => {

    await page.goto("https://www.olympics.com/en/olympic-games/tokyo-2020");
    await page.locator("//button[@id='onetrust-accept-btn-handler']").click();
    await page.locator("//a[text()='Athletes']").first().click();
    await page.locator("//input[@placeholder='Search for an athlete']").fill("Emma McKeon");
    await page.locator("//li[contains(.,'Emma MCKEON')]").click();
    await page.locator("//article[.//h3[contains(text(),'MCKEON')]]//a").click();
    let gold = await page.locator("//span[text()='Gold']/following-sibling::span").textContent();
    console.log("Gold medals:", gold);
    await page.waitForTimeout(5000);
    await page.screenshot({ path: "task6.jpeg", fullPage: true });

});