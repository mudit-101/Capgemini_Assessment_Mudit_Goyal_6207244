import {test} from "@playwright/test"
import path from "node:path";

test("browser controls", async({browser}) => {
    let context = await browser.newContext();
    let page = await context.newPage()
    // let size = await page.viewportSize()
    // console.log(size);
    // await page.setViewportSize({width:500, height:500})
    // console.log(await page.viewportSize());
    await page.goto("https://www.amazon.com/")
    let time = new Date().getTime()
    await page.screenshot({path:`screenshot/${time}.png`})
    console.log(await context.cookies)
    // console.log(await page.title());
    // console.log(await page.url());

    // await browser.close()
})
