const CustPortalPageElements = require('../pageElements/custportal.page.elements')
const ElementUtil = require('../util/elementUtil')
const constData =require('../data/const')




class CustPortalPage {
    
    async doVerifyCustPortalTitle(){
        await expect(CustPortalPageElements.custPortalPageTitle).toBeDisplayed()
        //await assert.ok(ElementUtil.doVerifyIsDisplayed(CustPortalPageElements.custPortalPageTitle),'cust Portal PageT itle is not displayed')
    }
    async doClickOnPatchesTab(){
        await ElementUtil.doClick(CustPortalPageElements.patchesTab)
    }
    async doSearchInPatchesTab(searchItem){
        await browser.pause(5000)
        await ElementUtil.doSendKeys(CustPortalPageElements.searchInPatchesTab,searchItem)
        await browser.pause(5000)
        await browser.keys(['Left arrow']);
        await browser.pause(5000)
        
    }
    async doClickOnCreatePatchIcon(){
        await ElementUtil.doClick(CustPortalPageElements.createPatchesIcon)
    }

    async doSelectProductFromProductNameDrpdown(){
        await ElementUtil.doClick(CustPortalPageElements.productNameDrpdown)
        await ElementUtil.doClick(CustPortalPageElements.productNameOption)
    }

    async doCreatePatch(){
        await ElementUtil.doClick(CustPortalPageElements.createPatchesIcon)
        await ElementUtil.doClick(CustPortalPageElements.productNameDrpdown)
        await ElementUtil.doScrollDownClick(CustPortalPageElements.productNameOption(constData.ProductName))
        await ElementUtil.doSendKeys(CustPortalPageElements.seededPatchNameInput,constData.SeededPatchName)
        await ElementUtil.doSendKeys(CustPortalPageElements.patchDescInput,constData.PatchDesc)
        await ElementUtil.doClick(CustPortalPageElements.solutionCodeDrpdown)
        await ElementUtil.doScrollDownClick(CustPortalPageElements.solutionCodeOption(constData.SolutionCode))
        await ElementUtil.doClick(CustPortalPageElements.patchStatusDrpdown)
        await ElementUtil.doScrollDownClick(CustPortalPageElements.patchStatusOption(constData.PatchStatus))
        await ElementUtil.doClick(CustPortalPageElements.baseVersionDrpdown)
        await ElementUtil.doScrollDownClick(CustPortalPageElements.baseVersionOption(constData.BaseVersion))
        await ElementUtil.doSendKeys(CustPortalPageElements.versionInput,constData.version)
        await ElementUtil.doClick(CustPortalPageElements.releaseBuildNoDrpdwn)
        await ElementUtil.doScrollDownClick(CustPortalPageElements.releaseBuildNoOption(constData.ReleaseBuildNo))
        await ElementUtil.doClick(CustPortalPageElements.patchTypeDrpdown)
        await ElementUtil.doScrollDownClick(CustPortalPageElements.patchTypeOption(constData.PatchType))
        await ElementUtil.doClick(CustPortalPageElements.includeMysqlChkbox)
        await ElementUtil.doClick(CustPortalPageElements.includeJavaChkbox)
        await ElementUtil.doClick(CustPortalPageElements.includeTomcatChkbox)
        await ElementUtil.doClick(CustPortalPageElements.superSeededPatchDrpdwn)
        await ElementUtil.doScrollDownClick(CustPortalPageElements.superSeededPatchOption(constData.SuperSeededPatch))
        await ElementUtil.doClick(CustPortalPageElements.preReqSeededPatchDrpdwn)
        await ElementUtil.doScrollDownClick(CustPortalPageElements.preReqSeededPatchOption(constData.PreReqSeededPatch))
        await ElementUtil.doClick(CustPortalPageElements.patchCategoryDrpdwn)
        await ElementUtil.doScrollDownClick(CustPortalPageElements.patchCategoryOption(constData.PatchCategory))
        await ElementUtil.doClick(CustPortalPageElements.dependentPatchDrpdwn)
        await ElementUtil.doScrollDownClick(CustPortalPageElements.dependentPatchOption(constData.DependentPatch))
        await ElementUtil.doSendKeys(CustPortalPageElements.artifactoryUrlInput,constData.ArtifactoryUrl)
        await ElementUtil.doClick(CustPortalPageElements.createPatchBtn)
        return await this.verifySearchInPatchesTab((constData.SeededPatchName))
          
    }

    async doDeletePatch(patchName){
        await this.doSearchInPatchesTab(patchName)
        const elements = await CustPortalPageElements.patchNameList;
        const texts = await ElementUtil.getElementText(elements)
        const deleteIcons = await CustPortalPageElements.patchDeleteIcon
        for (let i = 0; i < texts.length; i++) {
            if (texts[i] === patchName) {
                ElementUtil.doClick(deleteIcons[i+1])
                break
            }
        }
        await ElementUtil.doClick(CustPortalPageElements.deleteConfirmation)
    }

    async verifySearchInPatchesTab(searchItem) {
        await this.doSearchInPatchesTab(constData.SeededPatchName)
        const elements = await CustPortalPageElements.patchNameList;
        const texts = await ElementUtil.getElementText(elements)
        let flag = false
        for (let i = 0; i < texts.length; i++) {
            if (texts[i] === searchItem) {
                console.log('found the element ' + texts[i]);
                flag=true
                break
            }
        }
        return flag
    }  
    
    async verifySuccessMsg() {
        flag = false;
        const text = CustPortalPageElements.successMsg.getText()
        if (text === "Success") {
            console.log('Created Success fully ' + text);
            flag = true
        }
        return flag
    }
}

module.exports = new CustPortalPage();