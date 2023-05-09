const CustPortalPage = require('../pageobjects/custPortal.page')
const HomePage = require('../pageobjects/home.page')
const allureReporter = require('@wdio/allure-reporter').default
//const allure = require('allure-commandline')
const assert = require('assert')
const constData = require('../data/const')
const LoginPage = require('../pageobjects/login.page')
const configData = require('../data/config');
const ElementUtil = require('../util/elementUtil')


describe('Customer Portal Application', () => {
    before('Login into application', async () => {
        allureReporter.addSeverity('blocker');
        await LoginPage.open();
        await browser.maximizeWindow()
        await LoginPage.doLogin(configData.username, configData.password)
   }),
 
    xit('Create Patch', async () => {
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
        allureReporter.step('Verifying searched ticket', async () => {
        await HomePage.doClickOnViewApplications()
        await HomePage.doClickOnCustPortalLink()
        await CustPortalPage.doSearchInTicketsTab(constData.TicketId)
        assert.equal(await CustPortalPage.verifySearchInTicketsTab(constData.TicketId),true)
        })   
    })

    xit('Verify created patch details', async ()=>{
        allureReporter.addSeverity('normal')
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

    xit('Verify Account Name Search', async ()=>{
        allureReporter.addSeverity('normal')
        await HomePage.doClickOnViewApplications()
        await HomePage.doClickOnCustPortalLink()
        await CustPortalPage.doClickOnAccountsTab()
        await CustPortalPage.doSearchInAccountsTab(" 2bone1 Technologies ")
        await CustPortalPage.verifySearchInAccountsTab(" 2bone1 Technologies ")
    })

    xit('List out Account Names', async ()=>{
        allureReporter.addSeverity('normal')
        await HomePage.doClickOnViewApplications()
        await HomePage.doClickOnCustPortalLink()
        await CustPortalPage.doClickOnAccountsTab()
        let accList=await CustPortalPage.listOutAccountNameInAccountsTab()
        await ElementUtil.doWriteDataToExcel('./data/TestData.xlsx','AccNames',accList)   
    })

    xit('Check search in the Account patches tab', async () => {
        allureReporter.addSeverity('normal')
        await HomePage.doClickOnViewApplications()
        await HomePage.doClickOnCustPortalLink()
        await CustPortalPage.doClickOnPatchesTab()
        await CustPortalPage.doClickOnAccountPatchesTab()
        await CustPortalPage.doSearchInAccountPatchesTab("Advantage Solutions")
        assert.equal(await CustPortalPage.verifySearchInAccountPatchesTab("Advantage Solutions"),true)
        
    })

    xit('Check Tickets for perticular Account', async () => {
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

    it('Check patches of perticular Ticket of an Account', async () => {
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

})