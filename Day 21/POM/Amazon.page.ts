import { Page } from "@playwright/test"

class careeers {
    click_career: any
    find_role: any
    uni_role: any
    select_job: any
    page: any
    filters: any
    apply_job : any

    constructor(page: Page) {
        this.page = page
        this.click_career = page.locator('//a[@href="https://amazon.jobs"]')
        this.find_role = page.locator('//a[@class="btn btn-quarternary"]').first()
        this.uni_role = page.locator('.css-n1m10m').first()
        this.select_job = page.locator('//a[@class="header-module_desktop__Dnj66 header-module_title__9-W3R"]').nth(1)
        this.filters = page.locator('//ul[@class,"filter-values"]')
        this.apply_job = page.locator('a#apply-button')
    }

    async launchUrl(url: string) {
        await this.page.goto(url)
    }
    async clickCareer() {
        await this.click_career.click();
    }
    async clickFindRole() {
        await this.find_role.click();
    }
    
    async selectUniversityRoleAndSwitch() {
        await this.uni_role.click()
    }
    async selectFilter(index: number, value: string) {
        await this.page.waitForSelector('//ul[contains(@class,"filter-values")]')

        const filter = this.page.locator('//ul[contains(@class,"filter-values")]').nth(index)
        await filter.locator(`text=${value}`).click()
    }

    async selectJob(){
        const [newPage] = await Promise.all([
            this.page.context().waitForEvent('page'),
            this.select_job.click()
        ])
        await newPage.waitForLoadState()
        return newPage
    }
    async applyJob(newPage: { locator: (arg0: string) => { (): any; new(): any; click: { (): any; new(): any } } }){
        await newPage.locator('a#apply-button').click()
    }

    async takeScreenshot() {
        await this.page.screenshot({ path: 'amazonCareer.png', fullPage: true })
    }



}
export default careeers