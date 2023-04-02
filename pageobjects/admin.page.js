const adminPageElements = require('../pageElements/admin.page.elements')
const ElementUtil = require('../util/elementUtil')
const assert = require('assert');

class AdminPage {

    async doVerifyAdminPageTitleIsDisplayed() {
        await expect(adminPageElements.adminPageTitle).toBeDisplayed()
        //await assert.ok(ElementUtil.doVerifyIsDisplayed(adminPageElements.adminPageTitle),'Admin Page Title is not displayed')
        
    }
    async doVerifyAdminPageTabs() {
        await expect(adminPageElements.rolesIcon).toBeDisplayed()
        await expect(adminPageElements.integrationsIcon).toBeDisplayed()
        await expect(adminPageElements.usersIcon).toBeDisplayed()
        await expect(adminPageElements.accessProfilesIcon).toBeDisplayed()
        await expect(adminPageElements.teamsIcon).toBeDisplayed()

        // await assert.ok(ElementUtil.doVerifyIsDisplayed(adminPageElements.rolesIcon),'roles Icon is not displayed')
        // await assert.ok(ElementUtil.doVerifyIsDisplayed(adminPageElements.integrationsIcon),'integrations Icon is not displayed')
        // await assert.ok(ElementUtil.doVerifyIsDisplayed(adminPageElements.usersIcon),'users Icon is not displayed')
        // await assert.ok(ElementUtil.doVerifyIsDisplayed(adminPageElements.accessProfilesIcon),'access Profiles Icon is not displayed')
        // await assert.ok(ElementUtil.doVerifyIsDisplayed(adminPageElements.teamsIcon),'teams Icon is not displayed')
    }


} module.exports = new AdminPage();