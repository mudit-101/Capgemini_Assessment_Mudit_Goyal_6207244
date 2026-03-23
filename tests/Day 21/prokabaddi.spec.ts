import {test} from "@playwright/test"

test("recent matches",async({page})=>{
    await page.goto("https://www.prokabaddi.com/");
    await page.locator('//a[@data-parameter="homepage_recent_more_link"]').click();
    await page.locator('//a[@data-title="Dabang Delhi K.C. VS Puneri Paltan"]').nth(0).click();
    let a = await page.locator('(//h1[@class="title"])[1] | (//p[@class="status"])[2] | //p[@class="team-name"][2] | //h4[text()="Thyagaraj Indoor Stadium, Delhi"]').allTextContents();
    console.log(a);
    
})