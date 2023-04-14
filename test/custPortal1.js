const CustPortalPage = require('../pageobjects/custPortal.page')
const HomePage = require('../pageobjects/home.page')
const allureReporter = require('@wdio/allure-reporter').default
const assert = require('assert')
const constData = require('../data/const')
const LoginPage = require('../pageobjects/login.page')
const configData = require('../data/config');

describe('Customer Portal Application', () => {
    before('Login into application', async () => {
        allureReporter.addSeverity('blocker');
        await LoginPage.open();
        await browser.maximizeWindow()
        await LoginPage.doLogin(configData.username, configData.password)
   }),
 
    xit('Create Patch', async () => {
        allureReporter.addSeverity('blocker')
        await HomePage.doClickOnViewApplications()
        await HomePage.doClickOnCustPortalLink()
        await CustPortalPage.doClickOnPatchesTab()
        assert.equal(await CustPortalPage.doCreatePatch(), true)
    })
    xit('Search Patch', async () => { 
        allureReporter.addSeverity('normal')
        await HomePage.doClickOnViewApplications()
        await HomePage.doClickOnCustPortalLink()
        await CustPortalPage.doClickOnPatchesTab()
        assert.equal(await CustPortalPage.verifySearchInPatchesTab(constData.SeededPatchName), true)
    })

    
    it('Create Ticket', async () => {
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

    it('Search Ticket', async () => {
        allureReporter.addSeverity('normal')
        await HomePage.doClickOnViewApplications()
        await HomePage.doClickOnCustPortalLink()
        await CustPortalPage.doSearchInTicketsTab(constData.TicketId)
        assert.equal(await CustPortalPage.verifySearchInTicketsTab(constData.TicketId),true)
        
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