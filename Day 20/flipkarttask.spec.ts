import {test} from "@playwright/test"
import Flipkart from "../../POM/flipkart.page.ts"
test.only("Flipkart Scenario",async({page})=>{
    await page.goto("https://Flipkart.com");
    const flipkartPage=new Flipkart(page);
    await flipkartPage.handlePopupDialog();
    await flipkartPage.getProductsPage();
    await flipkartPage.addProducts();
    await flipkartPage.manageQuantity()
})