const CustPortalPage = require('../pageobjects/custPortal.page')
const HomePage = require('../pageobjects/home.page')
const allureReporter = require('@wdio/allure-reporter').default
const LoginPage = require('../pageobjects/login.page')
const configData = require('../data/config');
const ElementUtil = require('../util/elementUtil')
const assert = require('assert')


describe('Customer Portal Application', ()=> {
    before('Login into application', async () => {
        allureReporter.addSeverity('blocker');
        await LoginPage.open();
        await browser.maximizeWindow()
        await LoginPage.doLogin(configData.username, configData.password)
   })
  
   

    it('[P1]List out Account Names', async ()=> {
        allureReporter.addFeature("Accounts")
        allureReporter.addSeverity('normal')
        await HomePage.doClickOnViewApplications()
        await HomePage.doClickOnCustPortalLink()
        await CustPortalPage.doClickOnAccountsTab()
        let accList= await CustPortalPage.listOutAccountNameInAccountsTab1()
        await ElementUtil.doWriteDataToExcel('./data/TestData.xlsx','AccNames',accList)   
    })   

    it('[P2]Verify Filter in Licenses Tab', async ()=> {
        allureReporter.addFeature("Accounts")
        await HomePage.doClickOnViewApplications()
        await HomePage.doClickOnCustPortalLink()
        await CustPortalPage.doClickOnAccountsTab()
        await CustPortalPage.doSearchInAccountsTab('10x Genomics')
        await CustPortalPage.doClickOnLicensesIconInAccountsTab()  
        await CustPortalPage.doSelectStatusOptionFromStatusDrpdwnInLisensesTab('Active') 
        assert.equal(await CustPortalPage.doVerifyStatusOfLicenseAfterApplyingFilterInLicensesTab('Active'),true)
    })

    it('[P3]Verify Create Account in Accounts Tab', async ()=> {
        allureReporter.addFeature("Accounts")
        const excelData = await ElementUtil.getTestDataFromExcel('./data/TestData.xlsx', 'AccountCreate')
        for (var i = 1; i < excelData.length; i++) {
            await HomePage.doClickOnViewApplications()
            await HomePage.doClickOnCustPortalLink()
            await CustPortalPage.doClickOnAccountsTab()
            await CustPortalPage.doClickOnCreateAccountIcon()
            assert.equal(await CustPortalPage.createAccount(excelData[i]), true)
        }
    })

    it.only('[P4]Verify Patch Creation from Accounts Tab', async ()=> {
        allureReporter.addFeature("Accounts")
        allureReporter.addSeverity('normal')
        await HomePage.doClickOnViewApplications()
        await HomePage.doClickOnCustPortalLink()
        await CustPortalPage.doClickOnAccountsTab()
        await CustPortalPage.doSearchInAccountsTab("ADP")
        await CustPortalPage.doClickOnPatchesIconOfGivenAccount("ADP")
        assert.equal(await CustPortalPage.doCreatePatchFromAccounts(),true) 

    })

    it('[P5]Verify Account Name Search', async ()=> {
        allureReporter.addFeature("Accounts")
        allureReporter.addSeverity('normal')
        await HomePage.doClickOnViewApplications()
        await HomePage.doClickOnCustPortalLink()
        await CustPortalPage.doClickOnAccountsTab()
        await CustPortalPage.doSearchInAccountsTab("2bone1 Technologies")
        assert.equal(await CustPortalPage.verifySearchInAccountsTab("2bone1 Technologies"),true)
    })

    it('[P6]Verify Filters in Accounts Tab', async ()=> {
        allureReporter.addFeature("Accounts")
        allureReporter.addSeverity('normal')
        await HomePage.doClickOnViewApplications()
        await HomePage.doClickOnCustPortalLink()
        await CustPortalPage.doClickOnAccountsTab()
        assert.equal(await CustPortalPage.doSelectFilterOptionsInAccountsTab('Partner','Active','SplashBI'),true)  
    })
    
    

})