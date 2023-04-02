const DevopsPageElements = require('../pageElements/devops.page.elements')
const ElementUtil = require('../util/elementUtil')
const assert = require('assert');
class DevopsPage {
    
    async doVerifyDevopsPageTabs() {
        await expect(DevopsPageElements.devopsPageTitle).toBeDisplayed()
        await expect(DevopsPageElements.buildPatchTab).toBeDisplayed()
        await expect(DevopsPageElements.deployTab).toBeDisplayed()
        await expect(DevopsPageElements.infrastructureTab).toBeDisplayed()
        await expect(DevopsPageElements.adminTabInDevopsPage).toBeDisplayed()
       
        // await assert.ok(ElementUtil.doVerifyIsDisplayed(DevopsPageElements.devopsPageTitle),'Devops Page Title is not displayed')
        // await assert.ok(ElementUtil.doVerifyIsDisplayed(DevopsPageElements.buildPatchTab),'Build Patch Tab is not displayed')
        // await assert.ok(ElementUtil.doVerifyIsDisplayed(DevopsPageElements.deployTab),'Deploy tab is not displayed')
        // await assert.ok(ElementUtil.doVerifyIsDisplayed(DevopsPageElements.infrastructureTab),'infrastructure Tab is not displayed')
        // await assert.ok(ElementUtil.doVerifyIsDisplayed(DevopsPageElements.adminTabInDevopsPage),'admin Tab In Devops Page is not displayed')   
    }

}
module.exports = new DevopsPage();