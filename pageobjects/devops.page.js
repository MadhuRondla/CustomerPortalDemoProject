const DevopsPageElements = require('../pageElements/devops.page.elements')
class DevopsPage {
    
    async doVerifyDevopsPageTabs() {
        await expect(DevopsPageElements.devopsPageTitle).toBeDisplayed()
        await expect(DevopsPageElements.buildPatchTab).toBeDisplayed()
        await expect(DevopsPageElements.deployTab).toBeDisplayed()
        await expect(DevopsPageElements.infrastructureTab).toBeDisplayed()
        await expect(DevopsPageElements.adminTabInDevopsPage).toBeDisplayed()
       
    }

}
//export default new DevopsPage();
module.exports = new DevopsPage();