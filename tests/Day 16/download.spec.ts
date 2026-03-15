import {test,expect} from "@playwright/test";


test("Task 4",async({browser})=>{
     const context=await browser.newContext();
    const page=await context.newPage();
    await page.goto("https://demoapps.qspiders.com/ui/download?sublist=0");
    await page.getByPlaceholder("Enter text here").fill("dhgdhsgxcdgxxkkhdkhdskh");
    await page.getByPlaceholder("Filename").fill("newFile.txt");
    const [page2]=await Promise.all([
        page.waitForEvent("download"),
        page.getByRole("button",{name:'Download'}).click()
    ])
    await page.pause();
    
    
})