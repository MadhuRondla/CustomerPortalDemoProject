const CustPortalPage = require('../pageobjects/custPortal.page')
const HomePage = require('../pageobjects/home.page')
const allureReporter = require('@wdio/allure-reporter').default
const assert = require('assert');
const constData = require('../data/const')
const LoginPage = require('../pageobjects/login.page')
const testData = require('../data/config');

describe('Customer Portal Application', () => {
    before(async () => {
        allureReporter.addSeverity('blocker');
        await LoginPage.open();
        await browser.maximizeWindow();
        if (await LoginPage.doLogin(testData.username, testData.password)) {
            allureReporter.addStep("Logged in Successfully")
        } else {
            allureReporter.addStep("Login Failed! Check credentials")
        }

    });
    it('Create Patch', async () => {
        allureReporter.addSeverity('blocker');
        await HomePage.doClickOnViewApplications();
        await HomePage.doClickOnCustPortalLink()
        await CustPortalPage.doClickOnPatchesTab()
        let res = await CustPortalPage.doCreatePatch()
        assert.equal(res, true)
    })
    it('Search Patch', async () => {

        allureReporter.addFeature('Feature1');
        //allureReporter.addStory('Story1');
        //allureReporter.addSeverity('normal');
        await HomePage.doClickOnViewApplications();
        await HomePage.doClickOnCustPortalLink()
        await CustPortalPage.doClickOnPatchesTab()
        await browser.pause(3000)
        await CustPortalPage.doSearchInPatchesTab(constData.SeededPatchName)
        let flag = await CustPortalPage.verifySearchInPatchesTab(constData.SeededPatchName);
        assert.equal(flag, true)
        await browser.pause(5000)
    })

    it('Delete Patch', async () => {
        allureReporter.addSeverity('critical');
        await HomePage.doClickOnViewApplications();
        await HomePage.doClickOnCustPortalLink()
        await CustPortalPage.doClickOnPatchesTab()
        await CustPortalPage.doDeletePatch(constData.SeededPatchName)
        let res = await CustPortalPage.verifySearchInPatchesTab(constData.SeededPatchName)
        assert.equal(res, false)
    })


})