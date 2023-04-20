const CustPortalPage = require('../pageobjects/custPortal.page')
const HomePage = require('../pageobjects/home.page')
const allureReporter = require('@wdio/allure-reporter').default
const assert = require('assert')
const constData = require('../data/const')
const LoginPage = require('../pageobjects/login.page')
const configData = require('../data/config');
const ElementUtil = require('../util/elementUtil')
const { step } = require('@wdio/allure-reporter').default;

describe('Customer Portal Application', () => {
    before('Login into application', async () => {
        allureReporter.addSeverity('blocker');
        await LoginPage.open();
        await browser.maximizeWindow()
        await LoginPage.doLogin(configData.username, configData.password)
   }),
 
    it('Create Patch', async () => {
        allureReporter.addSeverity('blocker')
        const excelData = await ElementUtil.getTestDataFromExcel('./data/TestData.xlsx', 'PatchCreate')
        for (var i = 1; i < excelData.length; i++) {
            await HomePage.doClickOnViewApplications()
            await HomePage.doClickOnCustPortalLink()
            await CustPortalPage.doClickOnPatchesTab()
            assert.equal(await CustPortalPage.doCreatePatch(excelData[i]), true)
        }

        
    })
    xit('Search Patch', async () => { 
        allureReporter.addSeverity('normal')
        await HomePage.doClickOnViewApplications()
        await HomePage.doClickOnCustPortalLink()
        await CustPortalPage.doClickOnPatchesTab()
        assert.equal(await CustPortalPage.verifySearchInPatchesTab(constData.SeededPatchName), true)
    })

    
    xit('Create Ticket', async () => {
        allureReporter.addSeverity('blocker')
        await HomePage.doClickOnViewApplications()
        await HomePage.doClickOnCustPortalLink()
        await CustPortalPage.doCreateTicket()

    })
    xit('verify Patches tab table headers', async ()=>{
        allureReporter.addSeverity('normal')
        await HomePage.doClickOnViewApplications()
        await HomePage.doClickOnCustPortalLink()
        await CustPortalPage.doClickOnPatchesTab()
        assert.equal(await CustPortalPage.verifyTableHeaderWithFilterListCheckBx(),false)
    })

    xit('Search Ticket', async () => {
        allureReporter.addSeverity('normal')
        //allureReporter.addStep('Verifying searched ticket', async () => {
        await HomePage.doClickOnViewApplications()
        await HomePage.doClickOnCustPortalLink()
        await CustPortalPage.doSearchInTicketsTab(constData.TicketId)
        assert.equal(await CustPortalPage.verifySearchInTicketsTab(constData.TicketId),true)
        //})   
    })

    xit('Verify created patch details', async ()=>{
        await HomePage.doClickOnViewApplications()
        await HomePage.doClickOnCustPortalLink()
        await CustPortalPage.doClickOnPatchesTab()
        await CustPortalPage.verifyPatchesDetailsInInfoTab(constData.SeededPatchName)
    })

    xit('Delete Patch', async () => {
        allureReporter.addSeverity('critical')
        await HomePage.doClickOnViewApplications()
        await HomePage.doClickOnCustPortalLink()
        await CustPortalPage.doClickOnPatchesTab()
        await CustPortalPage.doDeletePatch(constData.SeededPatchName)
        assert.equal(await CustPortalPage.verifySearchInPatchesTab(constData.SeededPatchName), false)
    })

})