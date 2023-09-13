const CustPortalPage = require('../pageobjects/custPortal.page')
const HomePage = require('../pageobjects/home.page')
const allureReporter = require('@wdio/allure-reporter').default
const constData = require('../data/const')
const LoginPage = require('../pageobjects/login.page')
const configData = require('../data/config');
const ElementUtil = require('../util/elementUtil')
const assert = require('assert')


describe('Customer Portal Application', () => {
    before('Login into application', async () => {
        allureReporter.addSeverity('blocker');
        await LoginPage.open();
        await browser.maximizeWindow()
        await LoginPage.doLogin(configData.username, configData.password)
   })

it('[P1]Create Ticket', async () => {
    allureReporter.addFeature("Tickets")
    allureReporter.addSeverity('blocker')
    await HomePage.doClickOnViewApplications()
    await HomePage.doClickOnCustPortalLink()
    await CustPortalPage.doCreateTicket()

})

it('[P2]Search Ticket', async () => {
    allureReporter.addFeature("Tickets")
    allureReporter.addSeverity('normal')
    await HomePage.doClickOnViewApplications()
    await HomePage.doClickOnCustPortalLink()
    await CustPortalPage.doSearchInTicketsTab(constData.TicketId)
    assert.equal(await CustPortalPage.verifySearchInTicketsTab(constData.TicketId,"Ticket"),true)  
})

it('[P3]Check Tickets for perticular Account', async () => {
    allureReporter.addFeature("Tickets")
    allureReporter.addSeverity('normal')
    await HomePage.doClickOnViewApplications()
    await HomePage.doClickOnCustPortalLink()
    await CustPortalPage.doClickOnPatchesTab()
    await CustPortalPage.doClickOnAccountPatchesTab()
    await CustPortalPage.doSearchInAccountPatchesTab("Advantage Solutions")
    await CustPortalPage.doClickOnEditIconOfAccountInAccPatchesTab("Advantage Solutions")
    //await CustPortalPage.listOutPatchesNameOfAccount()
    let ticketsList=await CustPortalPage.listOutTicketNoOfAccount()
    let uniqueList = [...new Set(ticketsList)];
    await HomePage.doClickOnViewApplications()
    await HomePage.doClickOnCustPortalLink()
    let flag =true
    for(const value of uniqueList){
        await CustPortalPage.doSearchInTicketsTab(value)
        flag=await CustPortalPage.verifySearchInTicketsTab("Advantage Solutions")
        if(flag==false){
            assert.fail('Ticket is not related to given Account')
        }
    }
})

it('[P4]Check patches of perticular Ticket of an Account', async () => {
    allureReporter.addFeature("Tickets")
    allureReporter.addSeverity('normal')
    await HomePage.doClickOnViewApplications()
    await HomePage.doClickOnCustPortalLink()
    await CustPortalPage.doClickOnPatchesTab()
    await CustPortalPage.doClickOnAccountPatchesTab()
    await CustPortalPage.doSearchInAccountPatchesTab("Advantage Solutions")
    await CustPortalPage.doClickOnEditIconOfAccountInAccPatchesTab("Advantage Solutions")
    await CustPortalPage.doSearchInAccountPatchesTab("22316")
    const patchList = await CustPortalPage.listOutPatchesNameOfAccount()
    await HomePage.doClickOnViewApplications()
    await HomePage.doClickOnCustPortalLink()
    await CustPortalPage.doSearchInTicketsTab("22316")
    await CustPortalPage.doClickOnInfoIconOfTicket("22316")
    await CustPortalPage.doClickOnPatchesTabInTicketInfo()
    const patchList1 = await CustPortalPage.listOutPatchesNameOfTicket()
    assert.equal(await ElementUtil.doCompareTwoLists(patchList,patchList1), true)    
})

it('[P5]Verify Filter in Tickets Tab', async () => {
    allureReporter.addFeature("Tickets")
    await HomePage.doClickOnViewApplications()
    await HomePage.doClickOnCustPortalLink()
    await CustPortalPage.doSelectStatusOptionFromStatusDrpdwnInTicketsTab('WIP')
    assert.equal(await CustPortalPage.doVerifyStatusOfTicketsAfterApplyingFilterInTicketsTab('WIP'),true)  
})
})