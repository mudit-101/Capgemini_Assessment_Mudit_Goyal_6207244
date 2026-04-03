import {Locator,Page} from "@playwright/test"
class Flipkart{
    closePopup:Locator
    homeBtn:Locator
    gudiStore:Locator
    gudiCloth:Locator
    page:Page
    singleProduct:Locator
    singleProduct2:Locator
    page2:Page
    cart:Locator
    constructor(page:Page){
        this.page=page
        this.closePopup=page.locator('//span[@class="b3wTlE"]')
        this.homeBtn=page.locator('(//div[@class="css-146c3p1 r-dnmrzs r-1udh08x r-1udbk01 r-3s2u2q r-1iln25a r-1b1g84l r-tuq35u r-u8s1d r-q4m81j r-1r0gou5"])[6]/..')
        this.gudiStore=page.locator('//a[@href="/gudipadwa2026-at-store?param=7561&BU=Home"]');
        this.gudiCloth=page.locator('//a[@href="/all/~cs-bjn56jm6a4/pr?sid=all&collection-tab-name=Gudi+padwa+&pageCriteria=default&Param=356643&BU=Home"]');
        this.singleProduct=page.locator('//div[@class="RGLWAk"]').nth(4);
        this.singleProduct2=page.locator('//div[@class="RGLWAk"]').nth(7);
        this.page2=page;
        this.cart=page.locator("//a[@class='WGWdFn']")
        
    }
    async handlePopupDialog(){

        if(await this.closePopup.isVisible()){
        await this.closePopup.click();
    }
    }
    async getProductsPage(){
        await this.homeBtn.waitFor({ state: "visible" })
        await this.homeBtn.click()

        await this.gudiStore.waitFor({ state: "visible" })
        await this.gudiStore.click()

        await this.gudiCloth.waitFor({ state: "visible" })
        await this.gudiCloth.click()
    }
    async addProducts(){
        const [product1page]=await Promise.all([
            this.page.waitForEvent("popup"),
            this.singleProduct.click()
        ])
        this.page2=product1page
        await this.page2.waitForLoadState()
        await this.page2.getByText("Add to cart").click();
        
        await this.page2.close()
        const [product2page]=await Promise.all([
            this.page.waitForEvent("popup"),
            this.singleProduct2.click()
        ])

        this.page2=product2page
        await this.page2.waitForLoadState()
        await this.page2.getByText("Add to cart").click();
        await this.page2.close()
    }
    async manageQuantity(){
        await this.cart.click();
        await this.page.locator('//input[@class="j93Ywx"]').first().fill("3");
        await this.page.locator('//input[@class="j93Ywx"]').last().fill("2");
        await this.page.screenshot({path:"/screenshot/FlipkartScenario.png"})
        await this.page.locator('//button[@class="dSM5Ub JMrpad KcXDCU"]').click()


    }
}
export default Flipkart;