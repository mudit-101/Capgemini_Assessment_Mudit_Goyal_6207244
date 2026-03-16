import {test} from '@playwright/test'
test("asses",async({page})=>{
    await page.goto('https://www.lenskart.com/')
    await page.locator('//a[@class="sc-3b185ffd-3 hDyMKY getGaData" and @id="lrd9"]').hover()
    await page.locator('//img[@class="sc-2ea48804-10 hLFWdm"]').nth(1).click()
})