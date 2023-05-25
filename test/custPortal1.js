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
   }),


 //******************************Patches Testcases */
    it('[P1]Create Patch', async () => {
        allureReporter.addFeature("Patches")
        allureReporter.addSeverity('blocker')
        const excelData = await ElementUtil.getTestDataFromExcel('./data/TestData.xlsx', 'PatchCreate')
        for (var i = 1; i < excelData.length; i++) {
            await HomePage.doClickOnViewApplications()
            await HomePage.doClickOnCustPortalLink()
            await CustPortalPage.doClickOnPatchesTab()
            assert.equal(await CustPortalPage.doCreatePatch(excelData[i]), true)
        }   
    })

    it('[P2]Search Patch', async () => { 
        allureReporter.addFeature("Patches")
        allureReporter.addSeverity('normal')
        await HomePage.doClickOnViewApplications()
        await HomePage.doClickOnCustPortalLink()
        await CustPortalPage.doClickOnPatchesTab()
        assert.equal(await CustPortalPage.verifySearchInPatchesTab(constData.SeededPatchName), true)
    })
    
    it('[P3]verify Patches tab table headers', async ()=>{
        allureReporter.addFeature("Patches")
        allureReporter.addSeverity('normal')
        await HomePage.doClickOnViewApplications()
        await HomePage.doClickOnCustPortalLink()
        await CustPortalPage.doClickOnPatchesTab()
        assert.equal(await CustPortalPage.verifyTableHeaderWithFilterListCheckBx(),false)
    })

    it('[P4]Verify created patch details', async ()=>{
        allureReporter.addFeature("Patches")
        allureReporter.addSeverity('normal')
        await HomePage.doClickOnViewApplications()
        await HomePage.doClickOnCustPortalLink()
        await CustPortalPage.doClickOnPatchesTab()
        await CustPortalPage.verifyPatchesDetailsInInfoTab(constData.SeededPatchName)
    })

    it('[P5]Delete Patch', async () => {
        allureReporter.addFeature("Patches")
        allureReporter.addSeverity('critical')
        await HomePage.doClickOnViewApplications()
        await HomePage.doClickOnCustPortalLink()
        await CustPortalPage.doClickOnPatchesTab()
        await CustPortalPage.doDeletePatch(constData.SeededPatchName)
        assert.equal(await CustPortalPage.verifySearchInPatchesTab(constData.SeededPatchName), false)
    })

    it('[P6]Check search in the Account patches tab', async () => {
        allureReporter.addFeature("Patches")
        allureReporter.addSeverity('normal')
        await HomePage.doClickOnViewApplications()
        await HomePage.doClickOnCustPortalLink()
        await CustPortalPage.doClickOnPatchesTab()
        await CustPortalPage.doClickOnAccountPatchesTab()
        await CustPortalPage.doSearchInAccountPatchesTab("Advantage Solutions")
        assert.equal(await CustPortalPage.verifySearchInAccountPatchesTab("Advantage Solutions"),true)
        
    })



 //*****************************Accounts Testcases */   
    it('[P7]Verify Account Name Search', async ()=>{
        allureReporter.addFeature("Accounts")
        allureReporter.addSeverity('normal')
        await HomePage.doClickOnViewApplications()
        await HomePage.doClickOnCustPortalLink()
        await CustPortalPage.doClickOnAccountsTab()
        await CustPortalPage.doSearchInAccountsTab("2bone1 Technologies")
        assert.equal(await CustPortalPage.verifySearchInAccountsTab("2bone1 Technologies"),true)
    })

    it('[P8]List out Account Names', async ()=>{
        allureReporter.addFeature("Accounts")
        allureReporter.addSeverity('normal')
        await HomePage.doClickOnViewApplications()
        await HomePage.doClickOnCustPortalLink()
        await CustPortalPage.doClickOnAccountsTab()
        let accList= await CustPortalPage.listOutAccountNameInAccountsTab1()
        await ElementUtil.doWriteDataToExcel('./data/TestData.xlsx','AccNames',accList)   
    })   

    it('[P9]Verify Filter in Licenses Tab', async () => {
        allureReporter.addFeature("Accounts")
        await HomePage.doClickOnViewApplications()
        await HomePage.doClickOnCustPortalLink()
        await CustPortalPage.doClickOnAccountsTab()
        await CustPortalPage.doSearchInAccountsTab('10x Genomics')
        await CustPortalPage.doClickOnLicensesIconInAccountsTab()  
        await CustPortalPage.doSelectStatusOptionFromStatusDrpdwnInLisensesTab('Active') 
        assert.equal(await CustPortalPage.doVerifyStatusOfLicenseAfterApplyingFilterInLicensesTab('Active'),true)
    })

    it('[P10]Verify Create Account in Accounts Tab', async () => {
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

//************************* Tickets Testcases */

    it('[P11]Create Ticket', async () => {
        allureReporter.addFeature("Tickets")
        allureReporter.addSeverity('blocker')
        await HomePage.doClickOnViewApplications()
        await HomePage.doClickOnCustPortalLink()
        await CustPortalPage.doCreateTicket()

    })

    it('[P12]Search Ticket', async () => {
        allureReporter.addFeature("Tickets")
        allureReporter.addSeverity('normal')
        await HomePage.doClickOnViewApplications()
        await HomePage.doClickOnCustPortalLink()
        await CustPortalPage.doSearchInTicketsTab(constData.TicketId)
        assert.equal(await CustPortalPage.verifySearchInTicketsTab(constData.TicketId,"Ticket"),true)  
    })

    it('[P13]Check Tickets for perticular Account', async () => {
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

    it('[P14]Check patches of perticular Ticket of an Account', async () => {
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

    it('[P15]Verify Filter in Tickets Tab', async () => {
        allureReporter.addFeature("Tickets")
        await HomePage.doClickOnViewApplications()
        await HomePage.doClickOnCustPortalLink()
        await CustPortalPage.doSelectStatusOptionFromStatusDrpdwnInTicketsTab('WIP')
        assert.equal(await CustPortalPage.doVerifyStatusOfTicketsAfterApplyingFilterInTicketsTab('WIP'),true)  
    })
   

})