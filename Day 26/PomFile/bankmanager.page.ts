import { Page, Locator } from '@playwright/test';

export class BankManagerPage {
  readonly page: Page;

  
  readonly addCustomerTab:   Locator;
  readonly openAccountTab:   Locator;
  readonly customersTab:     Locator;
  readonly firstNameInput:   Locator;
  readonly lastNameInput:    Locator;
  readonly postCodeInput:    Locator;
  readonly addCustomerBtn:   Locator;
  readonly customerDropdown: Locator;
  readonly currencyDropdown: Locator;
  readonly processBtn:       Locator;

  constructor(page: Page) {
    this.page = page;

    
    this.addCustomerTab   = page.locator('button').filter({ hasText: 'Add Customer' });
    this.openAccountTab   = page.locator('button').filter({ hasText: 'Open Account' });
    this.customersTab     = page.locator('button').filter({ hasText: 'Customers' });


    this.firstNameInput   = page.locator('input[placeholder="First Name"]');
    this.lastNameInput    = page.locator('input[placeholder="Last Name"]');
    this.postCodeInput    = page.locator('input[placeholder="Post Code"]');
    this.addCustomerBtn   = page.locator('button[type="submit"]').filter({ hasText: 'Add Customer' });

    this.customerDropdown = page.locator('select#userSelect');
    this.currencyDropdown = page.locator('select#currency');
    this.processBtn       = page.locator('button[type="submit"]').filter({ hasText: 'Process' });
  }

  async waitForDashboard(): Promise<void> {
    await this.addCustomerTab.waitFor({ state: 'visible' });
  }

 
  async goToAddCustomer(): Promise<void> {
    await this.addCustomerTab.click();
    await this.firstNameInput.waitFor({ state: 'visible' });
  }

  async addCustomer(firstName: string, lastName: string, postCode: string): Promise<void> {
    await this.goToAddCustomer();

    await this.firstNameInput.fill(firstName);
    await this.lastNameInput.fill(lastName);
    await this.postCodeInput.fill(postCode);

    this.page.once('dialog', async(dialog)=>{
        console.log(`  Alert: ${dialog.message()}`);
        await dialog.accept();
        
    });
    await this.addCustomerBtn.click();
    await this.page.waitForTimeout(500);
    console.log(`    Customer "${firstName} ${lastName}" added`);
  }

 
  async goToOpenAccount(): Promise<void> {
    await this.openAccountTab.click();
    await this.customerDropdown.waitFor({ state: 'visible' });
  }

  async openAccount(customerFullName: string, currency: string): Promise<void> {
    await this.goToOpenAccount();

    await this.customerDropdown.selectOption({ label: customerFullName });
    await this.currencyDropdown.selectOption({ label: currency });

    this.page.once('dialog', async (dialog) => {
      console.log(`    Alert: ${dialog.message()}`);
      await dialog.accept();
    });

    await this.processBtn.click();
    await this.page.waitForTimeout(500);
    console.log(`    Account opened for "${customerFullName}" in ${currency}`);
  }
}
