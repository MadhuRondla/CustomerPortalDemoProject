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
})