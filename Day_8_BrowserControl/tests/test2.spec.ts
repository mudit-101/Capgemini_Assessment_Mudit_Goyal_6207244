import {test} from "@playwright/test"
import { log } from "node:console"

test("title",async({browser,browserName})=>{
    let context= await browser.newContext()
    let page = await context.newPage()
    let page2 = await context.newPage()
    //goto
    await page.goto("https://www.amazon.in/")
    await page.locator('input#twotabsearchtextbox').fill("iphone");
    console.log(browserName)
    await page.pause()
     await page.goto("https://www.amazon.in/")
    await page.locator('input#twotabsearchtextbox').fill("iphone");
    console.log(browserName)
    console.log(await page.viewportSize());
    await page2.goto("https://www.flipkart.com/")
})

//fixtures --> it is a setup block of code which is reuseable

/**
 * pgae
 * browser
 * browserName
 * Context
 * request ---> API
 */