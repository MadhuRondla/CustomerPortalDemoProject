const HomePage = require('../pageobjects/home.page')
const DevopsPage = require('../pageobjects/devops.page')
const CustPortalPage = require('../pageobjects/custPortal.page')
const adminPage = require('../pageobjects/admin.page')
const LoginPage = require('../pageobjects/login.page')
const testData = require('../data/config');

describe('Customer Portal Application', () => {

  it('Verify devops portal page', async () => {
    await HomePage.doClickOnDevopsPortalLink();
    await DevopsPage.doVerifyDevopsPageTabs();
    await browser.pause(5000);
    await HomePage.doClickOnViewApplications();

  });

  it('Verify cust portal page', async () => {
    await HomePage.doClickOnCustPortalLink();
    await CustPortalPage.doVerifyCustPortalTitle();
    await browser.pause(5000);
    await HomePage.doClickOnViewApplications();
  });

  it('Verify admin portal page', async () => {
    await HomePage.doClickOnAdminLink();
    await adminPage.doVerifyAdminPageTitleIsDisplayed();
    await adminPage.doVerifyAdminPageTabs();
    await browser.pause(5000);
    await HomePage.doClickOnViewApplications();
  });

  
})