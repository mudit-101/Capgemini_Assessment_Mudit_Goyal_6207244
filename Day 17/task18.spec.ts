import {test,expect} from "@playwright/test"

test("Dialogs",async({page})=>{
  page.on("dialog",async(d)=>{
    if (d.type()=="alert") {
      console.log(d.message())
      await d.accept()
    }
    else if (d.type()=="confirm") {
      console.log(d.message())
      await d.dismiss()
    }
    else if (d.type()=="prompt") {
      console.log(d.message())
      await d.accept("Playwright Testing")
    }
  })
  await page.goto("https://the-internet.herokuapp.com/javascript_alerts")
  await page.locator('//button[text()="Click for JS Alert"]').click()
  await expect(page.locator('#result')).toHaveText("You successfully clicked an alert")
  await page.locator('//button[text()="Click for JS Confirm"]').click()
  await expect(page.locator('#result')).toHaveText("You clicked: Cancel")
  await page.locator('//button[text()="Click for JS Prompt"]').click()
  await expect(page.locator('#result')).toHaveText("You entered: Playwright Testing")
})