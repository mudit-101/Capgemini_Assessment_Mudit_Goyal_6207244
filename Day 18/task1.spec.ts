import { test, expect } from '@playwright/test'
import excel from "exceljs"
import path from "path"

test("Excel data recovery", async ({ page }) => {
    let book = new excel.Workbook()
    await book.xlsx.readFile(path.join(__dirname, "../../testdata/readexcel.xlsx"))
    const sheet =  book.getWorksheet("Sheet1")!
    const rowCount = sheet.rowCount

    for (let i = 2; i <= rowCount; i++) {

        const row = sheet.getRow(i)

        const firstName = row.getCell(1).value?.toString()
        const lastName = row.getCell(2).value?.toString()
        const email = row.getCell(3).toString()
        const gender = row.getCell(4).value?.toString()
        const mobile = row.getCell(5).value?.toString()

        await page.goto('https://demoqa.com/automation-practice-form')

        await page.fill('#firstName', firstName!)
        await page.fill('#lastName', lastName!)
        await page.fill('#userEmail', String(email))
        if (gender === "Male") {
            await page.locator('label[for="gender-radio-1"]').click()
        }
        else if (gender === "Female") {
            await page.locator('label[for="gender-radio-2"]').click()
        }
        else {
            await page.locator('label[for="gender-radio-3"]').click()
        }

        await page.fill('#userNumber', mobile!)

        await page.click('#submit')

        await expect(page.locator('#example-modal-sizes-title-lg'))
            .toHaveText('Thanks for submitting the form')

        await page.screenshot({path:"excel.png"})
        await page.click('#closeLargeModal')
    }
})