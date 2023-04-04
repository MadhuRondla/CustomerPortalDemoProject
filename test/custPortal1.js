const CustPortalPage = require('../pageobjects/custPortal.page')
const HomePage = require('../pageobjects/home.page')
const allureReporter = require('@wdio/allure-reporter').default
const assert = require('assert')
const constData = require('../data/const')


describe('Customer Portal Application', () => {

    
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

    xit('Delete Patch', async () => {
        allureReporter.addSeverity('critical')
        await HomePage.doClickOnViewApplications()
        await HomePage.doClickOnCustPortalLink()
        await CustPortalPage.doClickOnPatchesTab()
        await CustPortalPage.doDeletePatch(constData.SeededPatchName)
        assert.equal(await CustPortalPage.verifySearchInPatchesTab(constData.SeededPatchName), false)
    })

    xit('Search Ticket', async () => {
        allureReporter.addSeverity('normal')
        await HomePage.doClickOnViewApplications()
        await HomePage.doClickOnCustPortalLink()
        await CustPortalPage.doSearchInTicketsTab(constData.TicketId)
        assert.equal(await CustPortalPage.verifySearchInTicketsTab(constData.TicketId),true)
        
    })
    xit('Create Ticket', async () => {
        allureReporter.addSeverity('blocker')
        await HomePage.doClickOnViewApplications()
        await HomePage.doClickOnCustPortalLink()
        await CustPortalPage.doCreateTicket()

    })
    it('verify Patches tab table headers', async ()=>{
        allureReporter.addSeverity('normal')
        await HomePage.doClickOnViewApplications()
        await HomePage.doClickOnCustPortalLink()
        await CustPortalPage.doClickOnPatchesTab()
        assert.equal(await CustPortalPage.verifyTableHeaderWithFilterListCheckBx(),false)
    })

})