import {test} from "@playwright/test";

test("Dropdown menu elements", async({browser}) => {
    let context = await browser.newContext();
    let page = await context.newPage();
    await page.goto("https://www.automationtesting.co.uk/dropdown.html");
    await page.locator("#cars").click();
    let options = await page.locator("//select/option").all();
    for(let option of options){
        let text = await option.textContent();
        console.log(text);
    }

    await page.waitForTimeout(3000);
    await page.screenshot({path: "dropdown.png"});

})