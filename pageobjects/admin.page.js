const adminPageElements = require('../pageElements/admin.page.elements')


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

    }


} module.exports = new AdminPage();