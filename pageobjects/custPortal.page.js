const CustPortalPageElements = require('../pageElements/custportal.page.elements')
const ElementUtil = require('../util/elementUtil')
const constData = require('../data/const')
const assert = require('assert')





class CustPortalPage {

    async doVerifyCustPortalTitle() {
        await expect(CustPortalPageElements.custPortalPageTitle).toBeDisplayed()   

    }
    async doClickOnPatchesTab() {
        await ElementUtil.doClick(CustPortalPageElements.patchesTab)
    }
    async doClickOnAccountsTab() {
        await ElementUtil.doClick(CustPortalPageElements.accountsTab)
    }
    async doClickOnAccountPatchesTab() {
        await ElementUtil.doClick(CustPortalPageElements.accountPatchesTab)
    }
    async doSearchInPatchesTab(searchItem) {
        //await browser.pause(3000)
        await ElementUtil.doSendKeys(CustPortalPageElements.searchInPatchesTab, searchItem)
        // eslint-disable-next-line wdio/no-pause
        await browser.pause(3000)
        await browser.keys(['Left arrow']);
        // eslint-disable-next-line wdio/no-pause
        await browser.pause(3000)

    }
    async doClickOnCreatePatchIcon() {
        await ElementUtil.doClick(CustPortalPageElements.createPatchesIcon)
    }
    async doSelectProductFromProductNameDrpdown() {
        await ElementUtil.doClick(CustPortalPageElements.productNameDrpdown)
        await ElementUtil.doClick(CustPortalPageElements.productNameOption)
    }
   
    async doCreatePatch(excelData) {
        await ElementUtil.doClick(CustPortalPageElements.createPatchesIcon)
        await ElementUtil.doClick(CustPortalPageElements.productNameDrpdown)
        await ElementUtil.doScrollDownClick(CustPortalPageElements.productNameOption(excelData[0]))
        await ElementUtil.doSendKeys(CustPortalPageElements.seededPatchNameInput, excelData[1])
        await ElementUtil.doSendKeys(CustPortalPageElements.patchDescInput, excelData[2])
        await ElementUtil.doClick(CustPortalPageElements.solutionCodeDrpdown)
        await ElementUtil.doScrollDownClick(CustPortalPageElements.solutionCodeOption(excelData[3]))
        await ElementUtil.doClick(CustPortalPageElements.patchStatusDrpdown)
        await ElementUtil.doScrollDownClick(CustPortalPageElements.patchStatusOption(excelData[4]))
        await ElementUtil.doClick(CustPortalPageElements.baseVersionDrpdown)
        await ElementUtil.doScrollDownClick(CustPortalPageElements.baseVersionOption(excelData[5]))
        await ElementUtil.doSendKeys(CustPortalPageElements.versionInput, excelData[6])
        await ElementUtil.doClick(CustPortalPageElements.releaseBuildNoDrpdwn)
        await ElementUtil.doScrollDownClick(CustPortalPageElements.releaseBuildNoOption(excelData[7]))
        await ElementUtil.doClick(CustPortalPageElements.patchTypeDrpdown)
        await ElementUtil.doScrollDownClick(CustPortalPageElements.patchTypeOption(excelData[8]))
        await ElementUtil.doClick(CustPortalPageElements.includeMysqlChkbox)
        await ElementUtil.doClick(CustPortalPageElements.includeJavaChkbox)
        await ElementUtil.doClick(CustPortalPageElements.includeTomcatChkbox)
        await ElementUtil.doClick(CustPortalPageElements.superSeededPatchDrpdwn)
        await ElementUtil.doScrollDownClick(CustPortalPageElements.superSeededPatchOption(excelData[9]))
        await ElementUtil.doClick(CustPortalPageElements.preReqSeededPatchDrpdwn)
        await ElementUtil.doScrollDownClick(CustPortalPageElements.preReqSeededPatchOption(excelData[10]))
        await ElementUtil.doClick(CustPortalPageElements.patchCategoryDrpdwn)
        await ElementUtil.doScrollDownClick(CustPortalPageElements.patchCategoryOption(excelData[11]))
        await ElementUtil.doClick(CustPortalPageElements.dependentPatchDrpdwn)
        await ElementUtil.doScrollDownClick(CustPortalPageElements.dependentPatchOption(excelData[12]))
        await ElementUtil.doSendKeys(CustPortalPageElements.artifactoryUrlInput, excelData[13])
        await ElementUtil.doClick(CustPortalPageElements.createPatchBtn)
        if(await ElementUtil.doGetText(CustPortalPageElements.alertDialog)==='Success'){
        await ElementUtil.doWaitUntillInVisible(CustPortalPageElements.alertDialog)
        return await this.verifySearchInPatchesTab((excelData[1]))
        }
        else{
            return false                                          
        }
    }

    async doCreateTicket() {
        // eslint-disable-next-line wdio/no-pause
        await browser.pause(5000)
        await ElementUtil.doClick(CustPortalPageElements.createTicketIcon)
        await ElementUtil.doClick(CustPortalPageElements.accountIdDrpdwn)
        await ElementUtil.doScrollDownClick(CustPortalPageElements.accountIdOption('ADP'))
        await ElementUtil.doClick(CustPortalPageElements.productIdDrpdwn)
        await ElementUtil.doScrollDownClick(CustPortalPageElements.productIdOption('SplashBI'))
        await ElementUtil.doClick(CustPortalPageElements.userIdDrpdwn)
        await ElementUtil.doScrollDownClick(CustPortalPageElements.userIdOption('test.user@splashbi.com'))
        await ElementUtil.doSendKeys(CustPortalPageElements.zendeskTicketNumberInput, '5667777')
        await ElementUtil.doSendKeys(CustPortalPageElements.ticketSummaryInput, 'TestTicket')
        await ElementUtil.doSendKeys(CustPortalPageElements.ticketDescInput, 'Test Ticket By WDIO')
        await ElementUtil.doClick(CustPortalPageElements.createBtn)
        await ElementUtil.doWaitUntillInVisible(CustPortalPageElements.alertDialog)
    }

    async doDeletePatch(patchName) {
        await this.doSearchInPatchesTab(patchName)
        const elements = await CustPortalPageElements.patchNameList;
        const texts = await ElementUtil.getElementText(elements)
        if (elements.length !== 0) {
            const deleteIcons = await CustPortalPageElements.patchDeleteIcon
            for (let i = 0; i < texts.length; i++) {
                if (texts[i] === patchName) {
                    ElementUtil.doClick(deleteIcons[i + 1])
                    break
                }
            }
            await ElementUtil.doClick(CustPortalPageElements.deleteConfirmation)
            await ElementUtil.doWaitUntillInVisible(CustPortalPageElements.alertDialog)
        }
        else {
            console.log(patchName + ' patch not found to delete')
        }
    }

    async verifySearchInPatchesTab(searchItem) {
        await this.doSearchInPatchesTab(searchItem)
        const elements = await CustPortalPageElements.patchNameList;
        const texts = await ElementUtil.getElementText(elements)
        let flag = false
        for (let i = 0; i < texts.length; i++) {
            if (texts[i] === searchItem) {
                console.log('found the element ' + texts[i]);
                flag = true
                break
            }
        }
        return flag
    }

    async verifySuccessMsg() {
        let flag = false;
        const text = CustPortalPageElements.successMsg.getText()
        if (text === "Success") {
            console.log('Created Success fully ' + text);
            flag = true
        }
        return flag
    }

    async doSearchInTicketsTab(searchItem) {
        // eslint-disable-next-line wdio/no-pause
        await browser.pause(3000)
        await ElementUtil.doSendKeys(CustPortalPageElements.searchInPatchesTab, searchItem)
        // eslint-disable-next-line wdio/no-pause
        await browser.pause(4000)
        //await browser.keys(['Left arrow']);
       // await browser.pause(3000)

    }

    async verifySearchInTicketsTab1(searchItem) {
        const elements = await CustPortalPageElements.ticketsList;
        const texts = await ElementUtil.getElementText(elements)
        let flag = false
        for (let i = 0; i < texts.length; i++) {
            if (texts[i] === searchItem) {
                console.log('found the element ' + texts[i]);
                flag = true
                break
            }
        }
        return flag
    }
    async doClickOnFilterlistInPatchesTab() {
        // eslint-disable-next-line wdio/no-pause
        await browser.pause(2000)
        await ElementUtil.doClick(CustPortalPageElements.filterListIconInPatchesTab)
        // eslint-disable-next-line wdio/no-pause
        await browser.pause(2000)
    }

    async verifyTableHeaderWithFilterListCheckBx() {
        let tableHeaders = ["Patch Name", "Patch Category", "Base Version", "Patch Type", "Product", "Solution Name", "Status", "Actions"]
        let flag = false;
        for (let i = 0; i < tableHeaders.length; i++) {
            await this.doClickOnFilterlistInPatchesTab()
            await ElementUtil.doClick(CustPortalPageElements.filterListItem(tableHeaders[i]))
            await browser.keys('Escape')
            switch (tableHeaders[i]) {
                case 'Checkbox':
                    flag = await CustPortalPageElements.checkboxHeaderInPatchesTab.isDisplayed();
                    break;
                case 'Patch Name':
                    flag = await CustPortalPageElements.patchNameHeaderInPatchesTab.isDisplayed();
                    break;
                case 'Patch Category':
                    flag = await CustPortalPageElements.patchCategoryHeaderInPatchesTab.isDisplayed();
                    break;
                case 'Base Version':
                    flag = await CustPortalPageElements.baseVersionHeaderInPatchesTab.isDisplayed();
                    break;
                case 'Patch Type':
                    flag = await CustPortalPageElements.patchTypeHeaderInPatchesTab.isDisplayed();
                    break;
                case 'Product':
                    flag = await CustPortalPageElements.productHeaderInPatchesTab.isDisplayed();
                    break;
                case 'Solution Name':
                    flag = await CustPortalPageElements.solNameHeaderInPatchesTab.isDisplayed();
                    break;
                case 'Status':
                    flag = await CustPortalPageElements.statusHeaderInPatchesTab.isDisplayed();
                    break;
                case 'Actions':
                    flag = await CustPortalPageElements.actionsHeaderInPatchesTab.isDisplayed();
                    break;
            }
            if (flag === true) {
                break
            }
        }
        return flag
    }

    async verifyPatchesDetailsInInfoTab(searchItem) {
        await this.doSearchInPatchesTab(constData.SeededPatchName)
        const elements = await CustPortalPageElements.patchNameList;
        const texts = await ElementUtil.getElementText(elements)
        for (let i = 0; i < texts.length; i++) {
            if (texts[i] === searchItem) {
                await ElementUtil.doClick(CustPortalPageElements.patchInfoIcon[i])
                break
            }
        }
        assert.equal(await ElementUtil.doGetValue(CustPortalPageElements.seededPatchNameInInfoTab),constData.SeededPatchName)
        assert.equal(await ElementUtil.doGetValue(CustPortalPageElements.descInInfoTab),constData.PatchDesc)
        assert.equal(await ElementUtil.doGetValue(CustPortalPageElements.versionInInfoTab),constData.version)
        assert.equal(await ElementUtil.doGetValue(CustPortalPageElements.artifactoryUrlInInfoTab),constData.ArtifactoryUrl)
        assert.equal(await ElementUtil.doGetText(CustPortalPageElements.productNameInInfoTab),constData.ProductName)
        assert.equal(await ElementUtil.doGetText(CustPortalPageElements.baseVersionInInfoTab),constData.BaseVersion)
        assert.equal(await ElementUtil.doGetText(CustPortalPageElements.solutionCodeInInfoTab),constData.SolutionCode)
        assert.equal(await ElementUtil.doGetText(CustPortalPageElements.patchTypeInInfoTab),constData.PatchType)
        assert.equal(await ElementUtil.doGetText(CustPortalPageElements.patchStatusInInfoTab),constData.PatchStatus)
        assert.equal(await ElementUtil.doGetText(CustPortalPageElements.supercededPatchIdsInInfoTab),constData.SuperSeededPatch)
        assert.equal(await ElementUtil.doGetText(CustPortalPageElements.prereqSeededPatchIdInInfoTab),constData.PreReqSeededPatch)
        assert.equal(await ElementUtil.doGetText(CustPortalPageElements.patchCategoryInInfoTab),constData.PatchCategory)
        assert.equal(await ElementUtil.doGetText(CustPortalPageElements.dependentPatchIdsInInfoTab),constData.DependentPatch)
        assert.ok(constData.ReleaseBuildNo.includes(await ElementUtil.doGetText(CustPortalPageElements.relBuildNoInInfoTab)))
    }

    async doSearchInAccountsTab(searchItem) {
        // eslint-disable-next-line wdio/no-pause
        await browser.pause(5000)
        await ElementUtil.doSendKeys(CustPortalPageElements.accountsSearchInput, searchItem)
        // eslint-disable-next-line wdio/no-pause
        await browser.pause(3000)
        //await browser.keys(['Left arrow']);
        //await browser.pause(3000)

    }

    async verifySearchInAccountsTab(searchItem) {
        const elements = await CustPortalPageElements.accountNameList;
        const texts = await ElementUtil.getElementText(elements)
        let flag = false
        for (let i = 0; i < texts.length; i++) {
            if (texts[i] === searchItem) {
                console.log('found the element ' + texts[i]);
                flag = true
                break
            }
        }
        return flag
    }
    async doClickOnNextPageIconInAccountsTab() {
        await ElementUtil.doClick(CustPortalPageElements.nextPageIconInAccountsTab)
        //await browser.pause(5000)
    }

    async listOutAccountNameInAccountsTab() {
        //await browser.pause(10000)
        const myValuesList = [];
        const texts = await ElementUtil.getElementText(await CustPortalPageElements.accountNameList)
        myValuesList.push(...texts)
        if(await CustPortalPageElements.nextPageIconInAccountsTab.getAttribute('disabled') === null){
            do {
                const texts = await ElementUtil.getElementText(await CustPortalPageElements.accountNameList)
                myValuesList.push(...texts)
                await this.doClickOnNextPageIconInAccountsTab()
            } while (await CustPortalPageElements.nextPageIconInAccountsTab.getAttribute('disabled') === null);
        } 
        return myValuesList
    }

    async doSearchInAccountPatchesTab(searchItem) {
        // eslint-disable-next-line wdio/no-pause
        await browser.pause(5000)
        await ElementUtil.doSendKeys(CustPortalPageElements.accountPatchesTabSearchInput, searchItem)
        // eslint-disable-next-line wdio/no-pause
        await browser.pause(3000)
        await browser.keys(['Left arrow']);
        // eslint-disable-next-line wdio/no-pause
        await browser.pause(3000)
    }

    async verifySearchInAccountPatchesTab(searchItem) {
        const elements = await CustPortalPageElements.accountNameListInAccountPatchesTab;
        const texts = await ElementUtil.getElementText(elements)
        let flag = false
        for (let i = 0; i < texts.length; i++) {
            if (texts[i] === searchItem) {
                console.log('found the element ' + texts[i]);
                flag = true
                break
            }
        }
        return flag
    }

    async doClickOnEditIconOfAccountInAccPatchesTab(accountName) {
        const accNames = await CustPortalPageElements.accountNameListInAccountPatchesTab
        const editIconList = await CustPortalPageElements.editIconInAccountPatchesTab
        let i = await ElementUtil.getIndexNumberFromList(accNames, accountName)
        await ElementUtil.doClick(editIconList[i])
        // eslint-disable-next-line wdio/no-pause
        await browser.pause(5000)
    }

    async listOutPatchesNameOfAccount() {
        const myValuesList = [];
        const texts = await ElementUtil.getAttributeFromList(await CustPortalPageElements.patchNameListOfAccount,'title')
        myValuesList.push(...texts)
        if(await CustPortalPageElements.nextPageIconInAccountsTab.getAttribute('disabled') === null){
            do {
                const texts = await ElementUtil.getAttributeFromList(await CustPortalPageElements.patchNameListOfAccount,'title')
                myValuesList.push(...texts)
                await this.doClickOnNextPageIconInAccountsTab()
            } while (await CustPortalPageElements.nextPageIconInAccountsTab.getAttribute('disabled') === null);
        }
        return myValuesList
    }

    async listOutTicketNoOfAccount() {
        const myValuesList = [];
        const texts = await ElementUtil.getAttributeFromList(await CustPortalPageElements.ticketNoListOfAccount, 'title')
        myValuesList.push(...texts);
        if (await CustPortalPageElements.nextPageIconInAccountsTab.getAttribute('disabled') === null) {
            do {
                await this.doClickOnNextPageIconInAccountsTab()
                const texts = await ElementUtil.getAttributeFromList(await CustPortalPageElements.ticketNoListOfAccount, 'title')
                myValuesList.push(...texts);
            } while (await CustPortalPageElements.nextPageIconInAccountsTab.getAttribute('disabled') === null);
        }
        return myValuesList
    }

    async verifySearchInTicketsTab(searchItem) {
        const elements = await CustPortalPageElements.accountNameListInTicketsTab;
        const texts = await ElementUtil.getElementsPromiseTextForAttribute(elements,'title')
        let flag = false
        for (const value of texts) {
            if (value === searchItem) {
                flag = true
                break
            }
        }
        return flag
    }

    async doClickOnInfoIconOfTicket(ticketNo){
        const texts = await ElementUtil.getElementText(await CustPortalPageElements.ticketNoListOfAccount)
        for (let i = 0; i < texts.length; i++) {
            if (texts[i] === ticketNo) {
                await ElementUtil.doClick(CustPortalPageElements.ticketInfoIcon[i])
                break
            }
        }
    }

    async doClickOnPatchesTabInTicketInfo() {
        await ElementUtil.doClick(CustPortalPageElements.patchesTabInTicketInfo)
        // eslint-disable-next-line wdio/no-pause
        await browser.pause(5000)
    }

    async listOutPatchesNameOfTicket() {
        const myValuesList = [];
        const texts = await ElementUtil.getElementText(await CustPortalPageElements.patchNameListOfAccount)
        myValuesList.push(...texts)
        if(await CustPortalPageElements.nextPageIconInAccountsTab.getAttribute('disabled') === null){
            do {
                const texts = await ElementUtil.getElementText(await CustPortalPageElements.patchNameListOfAccount)
                myValuesList.push(...texts)
                await this.doClickOnNextPageIconInAccountsTab()
            } while (await CustPortalPageElements.nextPageIconInAccountsTab.getAttribute('disabled') === null);
        }
        return myValuesList
    }

}
module.exports = new CustPortalPage();
//export default new CustPortalPage();