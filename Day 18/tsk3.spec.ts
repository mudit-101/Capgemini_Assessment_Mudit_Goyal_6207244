import { test, expect } from '@playwright/test'

test("Verify user can upload file successfully", async ({ page }) => {

    await page.goto("https://the-internet.herokuapp.com/upload")

    await page.locator('#file-upload').setInputFiles("C:/Users/HP/OneDrive/Desktop/P1/tests/download/newFile.txt")

    await page.locator('#file-submit').click()

    await expect(page.locator('#uploaded-files')).toContainText("demo.txt")

    await page.screenshot({path:"file.png"})

    await page.waitForTimeout(2000)

})