import { test, expect } from '@playwright/test'
import path from "path"

test("Verify user can upload profile image", async ({ page }) => {

    await page.goto("https://demoqa.com/upload-download")
    const [download] = await Promise.all([
        page.waitForEvent('download'),
        page.locator('#downloadButton').click()
    ])

    const filePath = path.join(__dirname, download.suggestedFilename())
    await download.saveAs(filePath)
    await page.locator('#uploadFile').setInputFiles(filePath)
    await expect(page.locator('#uploadedFilePath')).toContainText(download.suggestedFilename())
    await page.screenshot({path:"upload.png"})
    await page.waitForTimeout(2000)
})