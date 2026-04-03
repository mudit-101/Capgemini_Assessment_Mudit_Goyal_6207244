import { test, expect } from '@playwright/test';
import { LoginPage }           from '../../PomFile/Login.page';
import { BankManagerPage }     from '../../PomFile/bankmanager.page';
import { CustomerAccountPage } from '../../PomFile/caccount.Page.ts';
import { TEST_DATA }           from '../../Utility/testdata.ts';

test.describe('E2E Banking Flow', () => {

  test.only(
    'Login → Create Customer → Open Account → Deposit → Withdraw → Validate Balance → Logout',
    async ({ page }) => {

      const loginPage       = new LoginPage(page);
      const bankManagerPage = new BankManagerPage(page);
      const customerAccPage = new CustomerAccountPage(page);
      const customerFullName = `${TEST_DATA.customer.firstName} ${TEST_DATA.customer.lastName}`;

      console.log('Opening Banking Application');
      await loginPage.goto();
      await expect(loginPage.bankManagerLoginBtn).toBeVisible();
      console.log(' Login page loaded');

      console.log('Logging in as Bank Manager');
      await loginPage.loginAsBankManager();
      await bankManagerPage.waitForDashboard();
      console.log('Bank Manager dashboard loaded');

      console.log(` Adding customer "${customerFullName}"`);
      await bankManagerPage.addCustomer(
        TEST_DATA.customer.firstName,
        TEST_DATA.customer.lastName,
        TEST_DATA.customer.postCode
      );

      console.log(`Opening ${TEST_DATA.account.currency} account...`);
      await bankManagerPage.openAccount(customerFullName, TEST_DATA.account.currency);

      console.log(`Logging in as customer "${customerFullName}"`);
      await page.goto('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login');
      await page.waitForLoadState('domcontentloaded');
      await loginPage.loginAsCustomer(customerFullName);
      await customerAccPage.waitForDashboard();
      console.log(' Customer dashboard loaded');

      const initialBalance  = await customerAccPage.getInitialBalance();
      const depositAmt      = parseInt(TEST_DATA.transaction.depositAmount, 10);
      const withdrawAmt     = parseInt(TEST_DATA.transaction.withdrawAmount, 10);
      const expectedBalance = initialBalance + depositAmt - withdrawAmt;
      console.log(` ${initialBalance} + ${depositAmt} - ${withdrawAmt} = ${expectedBalance}`);

      console.log(` Depositing ${TEST_DATA.transaction.depositAmount}`);
      await customerAccPage.deposit(TEST_DATA.transaction.depositAmount);

      console.log(`Withdrawing ${TEST_DATA.transaction.withdrawAmount}`);
      await customerAccPage.withdraw(TEST_DATA.transaction.withdrawAmount);

      console.log('STEP 8: Validating final balance');
      const finalBalance = await customerAccPage.getBalance();
      console.log(`FINAL BALANCE: ${finalBalance}`);
      expect(finalBalance).toBe(expectedBalance);
      console.log(' Balance validated successfully');

      console.log(' STEP 9: Logging out');
      await customerAccPage.logout();
      console.log('  Logged out successfully');

      console.log(' E2E BANKING FLOW COMPLETED SUCCESSFULLY');
    }
  );

});