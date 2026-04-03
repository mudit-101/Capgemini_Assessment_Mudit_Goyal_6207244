import test from "@playwright/test";

test("X path", async({page})=>{
    await page.goto("https://www.amazon.in/")

    await page.locator('[id="twotabsearchtextbox"]').fill("Shoes")
    await page.locator("input#twotabsearchtextbox").press("Enter")
    await page.locator("//span[text()='Free Shipping']").click()
    // await page.locator("input#password").fill("password123")
    const a = await page.locator("(//span[contains(text(),'Nike Mens Revolution 8')])[1]").textContent();
    console.log(a);
    const b = await page.locator("(//div[@data-component-type='s-search-result'])[4]//span[@class='a-offscreen']").textContent();
    console.log(b);
    // await page.locator(".wp-block-button__link.has-text-color.has-background.has-very-dark-gray-background-color").click()
    // await page.waitForURL("https://practicetestautomation.com/practice-test-login/")
})
