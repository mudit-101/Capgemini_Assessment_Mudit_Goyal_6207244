import { Page, Locator, expect } from '@playwright/test';

export class CustomerAccountPage {
  readonly page: Page;
  readonly transactionsTab:     Locator;
  readonly depositTab:          Locator;
  readonly withdrawalTab:       Locator;

  readonly depositSubmitBtn:    Locator;
  readonly withdrawSubmitBtn:   Locator;

  readonly depositAmountInput:  Locator;
  readonly withdrawAmountInput: Locator;

  readonly logoutBtn:           Locator;

  constructor(page: Page) {
    this.page = page;

    this.transactionsTab  = page.locator('button[ng-click="showTransactions()"]');
    this.depositTab       = page.locator('button[ng-click="deposit()"]');
    this.withdrawalTab    = page.locator('button[ng-click="withdrawl()"]');

    this.depositSubmitBtn  = page.locator('form button[type="submit"]').filter({ hasText: 'Deposit' });
    this.withdrawSubmitBtn = page.locator('form button[type="submit"]').filter({ hasText: 'Withdraw' });

    this.depositAmountInput  = page.locator('input[placeholder="amount"]');
    this.withdrawAmountInput = page.locator('input[placeholder="amount"]');

    this.logoutBtn = page.locator('button').filter({ hasText: 'Logout' });
  }


  async waitForDashboard(): Promise<void> {
    await this.depositTab.waitFor({ state: 'visible', timeout: 15000 });
  }



  private async fillNumberInput(locator: Locator, value: string): Promise<void> {
    await locator.waitFor({ state: 'visible', timeout: 10000 });

    await locator.click({ clickCount: 3 });
    await this.page.waitForTimeout(150);


    await this.page.keyboard.type(value, { delay: 80 });
    await this.page.waitForTimeout(200);

    const actual = await locator.inputValue();
    if (actual !== value) {
      await locator.evaluate((el: HTMLInputElement, val: string) => {
        el.value = val;
        el.dispatchEvent(new Event('input',  { bubbles: true }));
        el.dispatchEvent(new Event('change', { bubbles: true }));
      }, value);
      await this.page.waitForTimeout(200);

      const retry = await locator.inputValue();
      if (retry !== value) {
        throw new Error(`Input fill failed after retry: expected "${value}", got "${retry}"`);
      }
    }
  }

  async deposit(amount: string): Promise<void> {
    await this.depositTab.click();
    await this.depositAmountInput.waitFor({ state: 'visible', timeout: 10000 });

    await this.fillNumberInput(this.depositAmountInput, amount);
    await this.depositSubmitBtn.click();

    await this.page.waitForFunction(
      () => document.body.innerText.includes('Deposit Successful'),
      { timeout: 10000 }
    );
    console.log(`  Deposited: ${amount}`);
    await this.page.waitForTimeout(600);
  }


  async withdraw(amount: string): Promise<void> {
    await this.withdrawalTab.click();
    await this.withdrawAmountInput.waitFor({ state: 'visible', timeout: 10000 });

    await this.fillNumberInput(this.withdrawAmountInput, amount);
    await this.withdrawSubmitBtn.click();

    await this.page.waitForFunction(
      () => document.body.innerText.toLowerCase().includes('transaction successful'),
      { timeout: 10000 }
    );
    console.log(` Withdrawn: ${amount}`);
    await this.page.waitForTimeout(600);
  }

  

  async getBalance(): Promise<number> {
    await this.depositTab.click();
    await this.page.waitForTimeout(500);

    const balance = await this.page.evaluate((): number => {
      const text = document.body.innerText;
      const match = text.match(/Balance\s*:\s*([\d,]+)/i);
      if (!match) return -1;
      return parseInt(match[1].replace(/,/g, ''), 10);
    });

    if (balance === -1) {
      throw new Error('Could not find "Balance :" on page');
    }
    console.log(`Current balance: ${balance}`);
    return balance;
  }

  async getInitialBalance(): Promise<number> {
    const balance = await this.getBalance();
    console.log(`Initial balance (before transactions): ${balance}`);
    return balance;
  }

  async assertBalance(expectedBalance: number): Promise<void> {
    const actual = await this.getBalance();
    console.log(`Expected: ${expectedBalance} | Actual: ${actual}`);
    expect(actual).toBe(expectedBalance);
    console.log(` Balance validated successfully`);
  }
  async viewTransactions(): Promise<void> {
    await this.transactionsTab.click();
    await this.page.waitForTimeout(600);
  }

  async getTransactionCount(): Promise<number> {
    return await this.page.locator('table tbody tr').count();
  }

  async logout(): Promise<void> {
    await this.logoutBtn.waitFor({ state: 'visible' });
    await this.logoutBtn.click();
    await this.page.waitForLoadState('domcontentloaded');
    console.log('Logged out successfully');
  }
}