import test from "@playwright/test";

// test("css selector", async({page})=>{
//     await page.goto("https://practicetestautomation.com/practice-test-login/")

//     await page.locator("input#username").fill("student")
//     await page.locator("input#password").fill("Password123")
//     await page.locator("button.btn").click()
//     await page.locator(".wp-block-button__link.has-text-color.has-background.has-very-dark-gray-background-color").click()
//     await page.waitForURL("https://practicetestautomation.com/practice-test-login/")
// })
test("css selector", async({page})=>{
    await page.goto("https://techbeamers.com/practice-test-login/")

    await page.locator("input#username").fill("testuser")
    await page.locator("input#password").fill("password123")
    await page.locator('button[type="submit"]').click()
    // await page.locator(".wp-block-button__link.has-text-color.has-background.has-very-dark-gray-background-color").click()
    // await page.waitForURL("https://practicetestautomation.com/practice-test-login/")
})
