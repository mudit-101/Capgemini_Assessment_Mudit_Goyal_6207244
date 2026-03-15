import { expect, test } from '@playwright/test'

test("E-commerce website", async ({ page }) => {
    await page.goto("https://www.saucedemo.com/");
    await page.getByPlaceholder("Username").fill("standard_user");
    await page.getByPlaceholder("Password").fill("secret_sauce");
    await page.getByRole("button", { name: "Login" }).click();
    await expect(page).toHaveURL(/inventory/);
    await page.locator("select.product_sort_container").selectOption({ value: "lohi" });
    const prices = page.locator('.inventory_item_price');

    for (let i = 0; i < await prices.count(); i++) {
        console.log(await prices.nth(i).textContent());
    }
    const f = page.locator('.inventory_item').first();
    await f.locator("button").click();
    await expect(f.locator('button')).toHaveText("Remove");
    await expect(page.locator('.shopping_cart_badge')).toHaveText("1");
    await page.waitForTimeout(3000);
    await page.screenshot({path:"Swaglabs.png"})
})