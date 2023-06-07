const CustPortalPageElements = require('../pageElements/custportal.page.elements')
const ElementUtil = require('../util/elementUtil')
const constData = require('../data/const')
const assert = require('assert')
const HomePage = require('../pageobjects/home.page')
//import path from 'node:path'





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
    async doSelectProductNameInPatchCreatePage(prodName){
        await ElementUtil.doClick(CustPortalPageElements.productNameDrpdown)
        //const optList = await CustPortalPageElements.statusFilterOptions
        //await ElementUtil.doSelectValueFromDropdown(optList, prodName)
        await ElementUtil.doScrollDownClick(CustPortalPageElements.productNameOption(prodName))
    }
   
    async doCreatePatch(excelData) {
        await ElementUtil.doClick(CustPortalPageElements.createPatchesIcon)

        await this.doSelectProductNameInPatchCreatePage(excelData[0])
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
        await browser.pause(2000)
        await ElementUtil.doSendKeys(CustPortalPageElements.searchInPatchesTab, searchItem)
        // eslint-disable-next-line wdio/no-pause
        await browser.pause(1000)
        await browser.keys(['Left arrow']);
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
        await ElementUtil.doWaitUntillVisible(CustPortalPageElements.ticketsTable)
        await ElementUtil.doSendKeys(CustPortalPageElements.accountsSearchInput, searchItem)
        // eslint-disable-next-line wdio/no-pause
        await browser.pause(3000)
        await browser.keys(['Left arrow']);
        // eslint-disable-next-line wdio/no-pause
        await browser.pause(2000)

    }

    async verifySearchInAccountsTab(searchItem) {
        const elements = await CustPortalPageElements.accountNameList;
        const texts = await ElementUtil.getElementText(elements)
        let flag = false
        for (let i = 0; i < texts.length; i++) {
            if (texts[i] === searchItem) {
                flag = true
                break
            }
        }
        return flag
    }
    async doClickOnNextPageIconInAccountsTab() {
        await ElementUtil.doClick(CustPortalPageElements.nextPageIconInAccountsTab)   
    }

    async doClickOnLicensesIconInAccountsTab() {
        await ElementUtil.doClick(CustPortalPageElements.licensesIconInAccountsTab)    
    }

    async listOutAccountNameInAccountsTab() {
        await ElementUtil.doWaitUntillVisible(await CustPortalPageElements.singleAccountName)
        const myValuesList = [];
        const texts = await ElementUtil.getElementText(await CustPortalPageElements.accountNameList)
        myValuesList.push(...texts)
        if(await CustPortalPageElements.nextPageIconInAccountsTab.getAttribute('disabled') === null){
            do {
                await this.doClickOnNextPageIconInAccountsTab()
                // eslint-disable-next-line wdio/no-pause
                //await browser.pause(2000)
                const texts = await ElementUtil.getElementText(await CustPortalPageElements.accountNameList)
                myValuesList.push(...texts)
            } while (await CustPortalPageElements.nextPageIconInAccountsTab.getAttribute('disabled') === null);
        } 
        return myValuesList
    }

    async listOutAccountNameInAccountsTab1() {

        await ElementUtil.doWaitUntillVisible(await CustPortalPageElements.singleAccountName)
        const myValuesList = [];
        const myValuesList1 = [];
        const texts = await ElementUtil.getElementText(await CustPortalPageElements.accountNameList)
        const status = await ElementUtil.getElementText(await CustPortalPageElements.accountStatus)
        
         myValuesList.push(...texts)
         myValuesList1.push(...status)
         if (await CustPortalPageElements.nextPageIconInAccountsTab.getAttribute('disabled') === null) {
            do {
               await this.doClickOnNextPageIconInAccountsTab()
               const texts = await ElementUtil.getElementText(await CustPortalPageElements.accountNameList)
               const status = await ElementUtil.getElementText(await CustPortalPageElements.accountStatus)
                myValuesList.push(...texts)
                myValuesList1.push(...status)    
            } while (await CustPortalPageElements.nextPageIconInAccountsTab.getAttribute('disabled') === null);
         }
         let combinedList = myValuesList.map((item, index) => {
            return [item, myValuesList1[index]];
          });

    return combinedList
}

    async doSearchInAccountPatchesTab(searchItem) {
        await ElementUtil.doWaitUntillVisible(CustPortalPageElements.ticketsTable)
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

    async verifySearchInTicketsTab(searchItem,searchGrp) {
        
        if(searchGrp==="Ticket"){
            const elements = await CustPortalPageElements.ticketNoListOfAccount;
            const texts = await ElementUtil.getElementText(elements)
            let flag = false
            for (const value of texts) {
                if (value == searchItem) {
                    flag = true
                    break
                }
            }
            return flag
        }
        else{
        const elements = await CustPortalPageElements.accountNameListInTicketsTab;
        const texts = await ElementUtil.getElementsPromiseTextForAttribute(elements,'title')
        let flag = false
        for (const value of texts) {
            if (value == searchItem) {
                flag = true
                break
            }
        }
        return flag
    }
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

    async doSelectStatusOptionFromStatusDrpdwnInTicketsTab(status) {
        await ElementUtil.doWaitUntillVisible(CustPortalPageElements.ticketsTable)
        await ElementUtil.doClick(CustPortalPageElements.statusFilterDropdownInTicketsTab)
        const optList = await CustPortalPageElements.statusFilterOptions
        for (let index = 0; index < optList.length; index++) {
            if (await optList[index].getText() === status) {
                await ElementUtil.doScrollDownClick(optList[index])
                break;
            }
        }
        await ElementUtil.doWaitUntillVisible(CustPortalPageElements.ticketsTable)

    }

    async doVerifyStatusOfTicketsAfterApplyingFilterInTicketsTab(stat) {
        let flag=true;
        const myValuesList = [];
        const texts = await ElementUtil.getElementText(await CustPortalPageElements.statusColumnValuesInTicketsTab)
        myValuesList.push(...texts)
        if(await CustPortalPageElements.nextPageIconInAccountsTab.getAttribute('disabled') === null){
            do {
                await this.doClickOnNextPageIconInAccountsTab()
                const texts = await ElementUtil.getElementText(await CustPortalPageElements.statusColumnValuesInTicketsTab)
                myValuesList.push(...texts)  
            } while (await CustPortalPageElements.nextPageIconInAccountsTab.getAttribute('disabled') === null);
        }
        for(let val of myValuesList){
            if(val !== stat){
               flag=false
               break;
            }
        }
        return flag
    }

    async doSelectStatusOptionFromStatusDrpdwnInLisensesTab(status) {
        await ElementUtil.doWaitUntillVisible(CustPortalPageElements.ticketsTable)
        await ElementUtil.doClick(CustPortalPageElements.statusFilterDropdownInLicensesTab)
        const optList = await CustPortalPageElements.statusFilterOptions
        for (let index = 0; index < optList.length; index++) {
            if (await optList[index].getText() === status) {
                await ElementUtil.doScrollDownClick(optList[index])
                break;
            }
        }
    }

    async doVerifyStatusOfLicenseAfterApplyingFilterInLicensesTab(stat) {
        let flag=true;
        const myValuesList = [];
        const texts = await ElementUtil.getElementText(await CustPortalPageElements.statusColumnValuesInLicensesTab)
        myValuesList.push(...texts)
        if(await CustPortalPageElements.nextPageIconInAccountsTab.getAttribute('disabled') === null){
            do {
                await this.doClickOnNextPageIconInAccountsTab()
                const texts = await ElementUtil.getElementText(await CustPortalPageElements.statusColumnValuesInLicensesTab)
                myValuesList.push(...texts)  
            } while (await CustPortalPageElements.nextPageIconInAccountsTab.getAttribute('disabled') === null);
        }
        for(let val of myValuesList){
            if(val !== stat){
               flag=false
               break;
            }
        }
        return flag
    }

    async doClickOnCreateAccountIcon() {
        await ElementUtil.doClick(CustPortalPageElements.createAccountIconInAccountsTab)   
    }

    async doEnterAccountNameInAccountNameInput(accName) {
        await ElementUtil.doSendKeys(CustPortalPageElements.accountNameInputInAccountCreateTab,accName)   
    }

    async doEnterAddressInAddressInput(address) {
        await ElementUtil.doSendKeys(CustPortalPageElements.addressInputInAccountCreateTab,address)   
    }

    async doEnterCountryInCountryInput(country) {
        await ElementUtil.doSendKeys(CustPortalPageElements.countryInputInAccountCreateTab,country)   
    }

    async doEnterStateInStateInput(state) {
        await ElementUtil.doSendKeys(CustPortalPageElements.stateInputInAccountCreateTab,state)   
    }

    async doEnterCityInCityInput(city) {
        await ElementUtil.doSendKeys(CustPortalPageElements.cityInputInAccountCreateTab,city)   
    }

    async doEnterPostalCodeInPostalCodeInput(postalCode) {
        await ElementUtil.doSendKeys(CustPortalPageElements.postalCodeInputInAccountCreateTab,postalCode)   
    }

    async doEnterNumberOfUsersInNoOfUsersInput(noOfUsers) {
        await ElementUtil.doSendKeys(CustPortalPageElements.numberOfUsersInputInAccountCreateTab,noOfUsers)   
    }

    async doSelectSupportLevelOptionAccountCreateTab(supportLevel) {
        await ElementUtil.doClick(CustPortalPageElements.supportLevelDrpdownInAccountCreateTab)
        const optList = await CustPortalPageElements.statusFilterOptions
        await ElementUtil.doSelectValueFromDropdown(optList, supportLevel)
    }
    async doSelectDesignationOptionInAccountCreateTab(designation) {
        await ElementUtil.doClick(CustPortalPageElements.designationDrpdownInAccountCreateTab)
        const optList = await CustPortalPageElements.statusFilterOptions
        await ElementUtil.doSelectValueFromDropdown(optList, designation)
    }

    async doSelectAccountTypeOptionInAccountCreateTab(accountType) {
        await ElementUtil.doClick(CustPortalPageElements.accountTypeDrpdownInAccountCreateTab)
        const optList = await CustPortalPageElements.statusFilterOptions
        await ElementUtil.doSelectValueFromDropdown(optList, accountType)
    }

    async doSelectAccountStatusOptionInAccountCreateTab(accountStatus) {
        await ElementUtil.doClick(CustPortalPageElements.accountStatusDrpdownInAccountCreateTab)
        const optList = await CustPortalPageElements.statusFilterOptions
        await ElementUtil.doSelectValueFromDropdown(optList, accountStatus)
    }
    async doSelectParentAccountOptionInAccountCreateTab(parentAccount) {
        await ElementUtil.doClick(CustPortalPageElements.partnerAccountIdDrpdownInAccountCreateTab)
        const optList = await CustPortalPageElements.statusFilterOptions
        await ElementUtil.doSelectValueFromDropdown(optList, parentAccount)
    }
    async doSelectPartnerAccountOptionInAccountCreateTab(partnerAccount) {
        await ElementUtil.doClick(CustPortalPageElements.newPartnerIdDrpdownInAccountCreateTab)
        const optList = await CustPortalPageElements.statusFilterOptions
        await ElementUtil.doSelectValueFromDropdown(optList, partnerAccount)
    }
    async doSelectCSROptionInAccountCreateTab(csr) {
        await ElementUtil.doClick(CustPortalPageElements.csrDrpdownInAccountCreateTab)
        const optList = await CustPortalPageElements.statusFilterOptions
        await ElementUtil.doSelectValueFromDropdown(optList, csr)
    }
    async doEnterAccountCodeInputInAccountCreateTab(accountCode) {
        await ElementUtil.doSendKeys(CustPortalPageElements.accountCodeDrpdownInAccountCreateTab,accountCode)    
    }
    async doEnterIndustryInputInAccountCreateTab(industry) {
        await ElementUtil.doSendKeys(CustPortalPageElements.industryDrpdownInAccountCreateTab,industry)    
    }
    async doSelectSalesPersonOptionInAccountCreateTab(salesPerson) {
        await ElementUtil.doClick(CustPortalPageElements.salesPersonDrpdownInAccountCreateTab)
        const optList = await CustPortalPageElements.statusFilterOptions
        await ElementUtil.doSelectValueFromDropdown(optList, salesPerson)
    }

    async doEnterBillingCommentsInBillingCommentsInput(billingComments) {
        await ElementUtil.doSendKeys(CustPortalPageElements.billingCommentsInputInAccountCreateTab,billingComments) 
         // eslint-disable-next-line wdio/no-pause
         await browser.pause(1000)  
    }

    async doEnterAttribute1InAttribute1Input(attribute1) {
        await ElementUtil.doSendKeys(CustPortalPageElements.attribute1InputInAccountCreateTab,attribute1)   
    }
    async doEnterAttribute2InAttribute2Input(attribute2) {
        await ElementUtil.doSendKeys(CustPortalPageElements.attribute2InputInAccountCreateTab,attribute2)   
    }
    async doEnterAttribute3InAttribute3Input(attribute3) {
        await ElementUtil.doSendKeys(CustPortalPageElements.attribute3InputInAccountCreateTab,attribute3) 
    }

    async doClickOnCreateBtnInAccountCreateTab() {
        await ElementUtil.doClick(CustPortalPageElements.createBtnInAccountCreateTab)   
    }

    async createAccount(excelData) {
        await this.doEnterAccountNameInAccountNameInput("TestAccount123")
        await this.doEnterAddressInAddressInput(excelData[1])
        await this.doEnterCountryInCountryInput(excelData[2])
        await this.doEnterStateInStateInput(excelData[3])
        await this.doEnterCityInCityInput(excelData[4])
        await this.doEnterPostalCodeInPostalCodeInput(excelData[5])
        await this.doEnterNumberOfUsersInNoOfUsersInput(excelData[6])
        await this.doSelectSupportLevelOptionAccountCreateTab(excelData[7])
        await this.doSelectDesignationOptionInAccountCreateTab(excelData[8])
        await this.doSelectAccountTypeOptionInAccountCreateTab(excelData[9])
        await this.doSelectAccountStatusOptionInAccountCreateTab(excelData[10])
        await this.doSelectParentAccountOptionInAccountCreateTab(excelData[11])
        await this.doSelectPartnerAccountOptionInAccountCreateTab(excelData[12])
        await this.doSelectCSROptionInAccountCreateTab(excelData[13])
        await this.doEnterAccountCodeInputInAccountCreateTab(excelData[14])
        await this.doEnterIndustryInputInAccountCreateTab(excelData[15])
        await this.doSelectSalesPersonOptionInAccountCreateTab(excelData[16])
        await this.doEnterBillingCommentsInBillingCommentsInput(excelData[17])
        await this.doEnterAttribute1InAttribute1Input(excelData[18])
        await this.doEnterAttribute2InAttribute2Input(excelData[19])
        await this.doEnterAttribute3InAttribute3Input(excelData[20])
        await this.doClickOnCreateBtnInAccountCreateTab()
        if (await ElementUtil.doGetText(CustPortalPageElements.alertDialog) === 'Success') {
            await ElementUtil.doWaitUntillInVisible(CustPortalPageElements.alertDialog)
            await HomePage.doClickOnViewApplications()
            await HomePage.doClickOnCustPortalLink()
            await this.doClickOnAccountsTab()
            await this.doSearchInAccountsTab("TestAccount123")
            return await this.verifySearchInAccountsTab("TestAccount123")
        }
        else {
            
            return false
        }
    }

  async doClickOnPatchesIconOfGivenAccount(accountName){
    const elements = await CustPortalPageElements.accountNameList
        const texts = await ElementUtil.getElementText(elements)
        const patchIcons = await CustPortalPageElements.patchesIconInAccountsTab
        for (let i = 0; i < texts.length; i++) {
            if (texts[i] === accountName) {
                await ElementUtil.doClick(patchIcons[i])
                break
            }
        }
  }

  async doCreatePatchFromAccounts() {
    
    await ElementUtil.doClick(CustPortalPageElements.creatPatchIconInAccountPatches)
    await ElementUtil.doClick(CustPortalPageElements.productNameDrpdown)
    await ElementUtil.doScrollDownClick(CustPortalPageElements.productNameOption("SplashBI"))
    await ElementUtil.doSendKeys(CustPortalPageElements.patchDescInput, "excelData")
    await ElementUtil.doClick(CustPortalPageElements.solutionCodeDrpdown)
    await ElementUtil.doScrollDownClick(CustPortalPageElements.solutionCodeOption("SplashHR"))
    await ElementUtil.doClick(CustPortalPageElements.patchTypeDrpdown)
    await ElementUtil.doScrollDownClick(CustPortalPageElements.patchTypeOption("One Off Patch"))
    await ElementUtil.doSendKeys(CustPortalPageElements.patchNameInputInAccountPatchCreationTab,"testingPatch11")
    await ElementUtil.doClick(CustPortalPageElements.preReqPatchDrpdwnInAccPatchCreationTab)
    // eslint-disable-next-line wdio/no-pause
    await browser.pause(2000)
    let optList = await CustPortalPageElements.statusFilterOptions
    await ElementUtil.doSelectValueFromDropdown(optList, "SplashBI_4.1.4")
    await ElementUtil.doClick(CustPortalPageElements.displayDrpdwnInAccPatchCreationTab)
    optList = await CustPortalPageElements.statusFilterOptions
    await ElementUtil.doSelectValueFromDropdown(optList, "Yes")
    await ElementUtil.doSendKeys(CustPortalPageElements.ticketNoInputInAccountPatchCreationTab,"30074")
    await ElementUtil.doSendKeys(CustPortalPageElements.deliveredOnInputInAccPatchCreationTab,"6/5/2023")
    await ElementUtil.doClick(CustPortalPageElements.prodChkboxInAccPatchCreationTab)
    await ElementUtil.doClick(CustPortalPageElements.testChkboxInAccPatchCreationTab)
    await ElementUtil.doClick(CustPortalPageElements.devChkboxInAccPatchCreationTab)
    await ElementUtil.doClick(CustPortalPageElements.includeInArtifactDrpdwnInAccPatchCreationTab)
    optList = await CustPortalPageElements.statusFilterOptions
    await ElementUtil.doSelectValueFromDropdown(optList, "Yes")
    await ElementUtil.doClick(CustPortalPageElements.includeInReplicationDrpdwnInAccPatchCreationTab)
    optList = await CustPortalPageElements.statusFilterOptions
    await ElementUtil.doSelectValueFromDropdown(optList, "Yes")
    await ElementUtil.doUploadFileWithInvisibleInput(CustPortalPageElements.chooseFileElement,'../data/test.zip')
    await ElementUtil.doClick(CustPortalPageElements.saveBtnInAccountPatchCreationTab)

    // eslint-disable-next-line wdio/no-pause
    await browser.pause(2000)
     if(await ElementUtil.doGetText(CustPortalPageElements.alertDialog)==='Success'){
        await ElementUtil.doWaitUntillInVisible(CustPortalPageElements.alertDialog)
        return true
     }
     else{
        return false                                         
     }
}

    async doSelectFilterOptionsInAccountsTab(custType, accStatus, accProduct) {
        try {
            await ElementUtil.doClick(CustPortalPageElements.filterByCustDrpdownInAccountsTab)
            let optList = await CustPortalPageElements.statusFilterOptions
            await ElementUtil.doSelectValueFromDropdown(optList, custType)
            await ElementUtil.doClick(CustPortalPageElements.filterByStatusDrpdownInAccountsTab)
            optList = await CustPortalPageElements.statusFilterOptions
            await ElementUtil.doSelectValueFromDropdown(optList, accStatus)
            await ElementUtil.doClick(CustPortalPageElements.filterByProductDrpdownInAccountsTab)
            optList = await CustPortalPageElements.statusFilterOptions
            await ElementUtil.doSelectValueFromDropdown(optList, accProduct)
            // eslint-disable-next-line wdio/no-pause
            await browser.pause(2000)
            let flag1 = true
            const status = await ElementUtil.getElementText(await CustPortalPageElements.statusListInAccountsTab)
            for (const value of status) {
                if (value != 'Active') {
                    flag1 = false
                    return flag1
                }
            }
            for (let i = 0; i < await CustPortalPageElements.infoIconInAccountsTab.length; i++) {
                await ElementUtil.doClick(await CustPortalPageElements.infoIconInAccountsTab[i])
                if (await ElementUtil.doGetText(CustPortalPageElements.accountTypeInAccountInfoTab) != custType) {
                    flag1 = false
                    return flag1
                }
                await ElementUtil.doClick(await CustPortalPageElements.closeIconInAccountInfoTab)
                await ElementUtil.doClick(await CustPortalPageElements.productsIconInAccountsTab[i])
                if (await ElementUtil.doGetText(CustPortalPageElements.productInAccountProductsTab) != accProduct) {
                    flag1 = false
                    return flag1
                }
                await ElementUtil.doClick(await CustPortalPageElements.closeIconInProductsTab)

            }

            if (await CustPortalPageElements.nextPageIconInAccountsTab.getAttribute('disabled') === null) {
                do {
                    await this.doClickOnNextPageIconInAccountsTab()
                    const status = await ElementUtil.getElementText(await CustPortalPageElements.statusListInAccountsTab)
                    for (const value of status) {
                        if (value != 'Active') {
                            flag1 = false
                            return flag1
                        }
                    }
                    for (let i = 0; i < await CustPortalPageElements.infoIconInAccountsTab.length; i++) {
                        await ElementUtil.doClick(await CustPortalPageElements.infoIconInAccountsTab[i])
                        if (await ElementUtil.doGetText(CustPortalPageElements.accountTypeInAccountInfoTab) != custType) {
                            flag1 = false
                            return flag1
                        }
                        await ElementUtil.doClick(await CustPortalPageElements.closeIconInAccountInfoTab)
                        await ElementUtil.doClick(await CustPortalPageElements.productsIconInAccountsTab[i])
                        if (await ElementUtil.doGetText(CustPortalPageElements.productInAccountProductsTab) != accProduct) {
                            flag1 = false
                            return flag1
                        }
                        await ElementUtil.doClick(await CustPortalPageElements.closeIconInProductsTab)
                    }
                } while (await CustPortalPageElements.nextPageIconInAccountsTab.getAttribute('disabled') === null);
            } return flag1
        } catch (error) {
            //throw new Error(error);
            return false
        }
    }


}
module.exports = new CustPortalPage();
