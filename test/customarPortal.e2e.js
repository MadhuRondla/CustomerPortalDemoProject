const HomePage = require('../pageobjects/home.page')
const DevopsPage = require('../pageobjects/devops.page')
const CustPortalPage = require('../pageobjects/custPortal.page')
const adminPage = require('../pageobjects/admin.page')
const LoginPage = require('../pageobjects/login.page')
const configData = require('../data/config');

describe('Customer Portal Application', () => {
  before('Login into application', async () => {
    //allureReporter.addSeverity('blocker');
    await LoginPage.open();
    await browser.maximizeWindow()
    await LoginPage.doLogin(configData.username, configData.password)
}),

  it('Verify devops portal page', async () => {
    await HomePage.doClickOnDevopsPortalLink();
    await DevopsPage.doVerifyDevopsPageTabs();
    await HomePage.doClickOnViewApplications();

  });

  it('Verify cust portal page', async () => {
    await HomePage.doClickOnCustPortalLink();
    await CustPortalPage.doVerifyCustPortalTitle();
    await HomePage.doClickOnViewApplications();
  });

  it('Verify admin portal page', async () => {
    await HomePage.doClickOnAdminLink();
    await adminPage.doVerifyAdminPageTitleIsDisplayed();
    await adminPage.doVerifyAdminPageTabs();
    await HomePage.doClickOnViewApplications();
  });

  
})