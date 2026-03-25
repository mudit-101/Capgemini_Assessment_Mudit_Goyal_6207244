import { Page, Locator } from '@playwright/test';

export class LoginPage {
  readonly page: Page;

  readonly bankManagerLoginBtn: Locator;
  readonly customerLoginBtn:    Locator;
  readonly customerDropdown:    Locator;
  readonly customerLoginSubmit: Locator;

  constructor(page: Page) {
    this.page = page;

    this.bankManagerLoginBtn = page.locator('button').filter({ hasText: 'Bank Manager Login' });
    this.customerLoginBtn    = page.locator('button').filter({ hasText: 'Customer Login' });
    this.customerDropdown    = page.locator('select#userSelect');
    this.customerLoginSubmit = page.locator('button[type="submit"]').filter({ hasText: 'Login' });
  }

  async goto(): Promise<void> {
    await this.page.goto(
      'https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login'
    );
    await this.page.waitForLoadState('domcontentloaded');
  }

  async loginAsBankManager(): Promise<void> {
    await this.bankManagerLoginBtn.waitFor({ state: 'visible' });
    await this.bankManagerLoginBtn.click();
    await this.page.waitForLoadState('domcontentloaded');
  }

  async loginAsCustomer(customerName: string): Promise<void> {
    await this.customerLoginBtn.waitFor({ state: 'visible' });
    await this.customerLoginBtn.click();

    await this.customerDropdown.waitFor({ state: 'visible' });
    await this.customerDropdown.selectOption({ label: customerName });

    await this.customerLoginSubmit.waitFor({ state: 'visible' });
    await this.customerLoginSubmit.click();
  }
}
