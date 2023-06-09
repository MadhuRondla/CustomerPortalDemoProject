class CustPortalPageElements{

    get custPortalPageTitle () {return $('//span[text()="Customer Portal"]');}
    get patchesTab () { return $('//span[text()="Patches"]');}
    get searchInPatchesTab(){return $('//input[@placeholder="Search…"]')}
    get patchNameList(){return  $$('//td[contains(@class,"cdk-column-seededPatchName")]/span')}
    get createPatchesIcon(){return $('//button[@title="Create Patches"]')}
    get productNameDrpdown(){return $('//mat-select[@formcontrolname="productId"]')}
    get seededPatchNameInput(){return $('//input[@formcontrolname="seededPatchName"]')}
    get patchDescInput(){return $('//input[@formcontrolname="description"]')}
    get solutionCodeDrpdown(){return $('//mat-select[@formcontrolname="solutionCode"]')}
    get patchStatusDrpdown(){return $('//mat-select[@formcontrolname="patchStatus"]')}
    get baseVersionDrpdown(){return $('//mat-select[@formcontrolname="baseVersion"]')}
    get versionInput(){return $('//input[@formcontrolname="version"]')}
    get releaseBuildNoDrpdwn(){return $('//mat-select[@formcontrolname="releasedBuildNumber"]')}
    get patchTypeDrpdown(){return $('//mat-select[@formcontrolname="patchType"]')}
    get includeMysqlChkbox(){return $('//mat-checkbox[@formcontrolname="includeMysql"]')}
    get includeJavaChkbox(){return $('//mat-checkbox[@formcontrolname="includeJava"]')}
    get includeTomcatChkbox(){return $('//mat-checkbox[@formcontrolname="includeTomcat"]')}
    get superSeededPatchDrpdwn(){return $('//mat-select[@formcontrolname="supercededPatchIds"]')}
    get preReqSeededPatchDrpdwn(){return $('//mat-select[@formcontrolname="prereqSeededPatchId"]')}
    get patchCategoryDrpdwn(){return $('//mat-select[@formcontrolname="patchCategory"]')}
    get dependentPatchDrpdwn(){return $('//mat-select[@formcontrolname="dependentPatchIds"]')}
    get artifactoryUrlInput(){return $('//input[@formcontrolname="artifactoryUrl"]')}
    get createPatchBtn(){return $('//span[text()="CREATE"]')}
    get successMsg(){return $('//div[contains(text(),"Success")]')}
    get patchDeleteIcon(){return $$('//mat-icon[text()="delete"]')}
    get deleteConfirmation(){return $('//span[text()="DELETE"]')}
    get ticketsList(){return  $$('//td[contains(@class,"mat-column-ticketId")]/span/span')}
    get createTicketIcon(){return $('//button[@title="Create Tickect"]')}
    get accountIdDrpdwn(){return $('//mat-select[@formcontrolname="accountId"]')}
    get productIdDrpdwn(){return $('//mat-select[@formcontrolname="productId"]')}
    get userIdDrpdwn(){return $('//mat-select[@formcontrolname="userId"]')}
    get zendeskTicketNumberInput(){return $('//input[@formcontrolname="zendeskTicketNumber"]')}
    get ticketSummaryInput(){return $('//input[@formcontrolname="ticketSummary"]')}
    get ticketDescInput(){return $('//textarea[@formcontrolname="ticketDescription"]')}
    get createBtn(){return $('//span[text()="CREATE"]')}
    get filterListIconInPatchesTab(){return $('//mat-icon[text()="filter_list"]')}
    get patchNameHeaderInPatchesTab(){return $('//th[contains(@class,"cdk-column-seededPatchName")]')}
    get checkboxHeaderInPatchesTab(){return $('//th[contains(@class,"cdk-column-checkbox")]')}

    get patchCategoryHeaderInPatchesTab(){return $('//th[contains(@class,"cdk-column-patchCategory")]')}
    get baseVersionHeaderInPatchesTab(){return $('//th[contains(@class,"cdk-column-baseVersion")]')}
    get patchTypeHeaderInPatchesTab(){return $('//th[contains(@class,"cdk-column-patchType")]')}
    get productHeaderInPatchesTab(){return $('//th[contains(@class,"cdk-column-productName")]')}
    get solNameHeaderInPatchesTab(){return $('//th[contains(@class,"cdk-column-solutionCode")]')}
    get statusHeaderInPatchesTab(){return $('//th[contains(@class,"cdk-column-patchStatus")]')}
    get actionsHeaderInPatchesTab(){return $('//th[contains(@class,"cdk-column-actions")]')}
    get alertDialog(){return $('//div[@role="alertdialog"]/preceding::div[1]')}
    
    get patchInfoIcon() {return $$('//button[@title="Info"]')}
    get seededPatchNameInInfoTab(){return $('//input[@formcontrolname="seededPatchName"]')}
    get productNameInInfoTab(){return $('//mat-select[@formcontrolname="productId"]/descendant::span[2]')}
    get baseVersionInInfoTab(){return $('//mat-select[@formcontrolname="baseVersion"]/descendant::span[2]')}
    get descInInfoTab(){return $('//input[@formcontrolname="description"]')}
    get solutionCodeInInfoTab(){return $('//mat-select[@formcontrolname="solutionCode"]/descendant::span[2]')}
    get versionInInfoTab(){return $('//input[@formcontrolname="version"]')}
    get relBuildNoInInfoTab(){return $('//mat-select[@formcontrolname="releasedBuildNumber"]/descendant::span[2]')}
    get patchTypeInInfoTab(){return $('//mat-select[@formcontrolname="patchType"]/descendant::span[2]')}
    get patchStatusInInfoTab(){return $('//mat-select[@formcontrolname="patchStatus"]/descendant::span[2]')}
    get supercededPatchIdsInInfoTab(){return $('//mat-select[@formcontrolname="supercededPatchIds"]/descendant::span[2]')}
    get prereqSeededPatchIdInInfoTab(){return $('//mat-select[@formcontrolname="prereqSeededPatchId"]/descendant::span[2]')}
    get patchCategoryInInfoTab(){return $('//mat-select[@formcontrolname="patchCategory"]/descendant::span[2]')}
    get dependentPatchIdsInInfoTab(){return $('//mat-select[@formcontrolname="dependentPatchIds"]/descendant::span[2]')}
    get artifactoryUrlInInfoTab(){return $('//input[@formcontrolname="artifactoryUrl"]')}

    get accountsTab(){return $('//span[text()="Accounts"]')}
    get accountsSearchInput(){return $('//input[@placeholder="Search…"]')}
    get accountNameList(){return $$('//td[contains(@class,"cdk-column-accountName mat-column-accountName")]/span')}
    get singleAccountName(){return $('//td[contains(@class,"cdk-column-accountName mat-column-accountName")]/span')}
    get accountStatus(){return $$('//td[contains(@class,"cdk-column-accountStatus")]/span')}
    get nextPageIconInAccountsTab(){return $('//button[@aria-label="Next page"]')}

    get accountPatchesTab(){return $('//span[text()="Account Patches"]')}
    get accountPatchesTabSearchInput(){return $('//input[@placeholder="Search…"]')}
    get accountNameListInAccountPatchesTab(){return $$('//td[contains(@class,"cdk-column-accountName mat-column-accountName")]/span')}
    get editIconInAccountPatchesTab(){return $$('//button[@title="Edit"]')}
    get patchNameListOfAccount(){return $$('//td[contains(@class,"cdk-column-patchName mat-column-patchName")]/span/span')}
    get ticketNoListOfAccount(){return $$('//td[contains(@class,"cdk-column-ticketId mat-column-ticketId")]/span/span')}
    get accountNameListInTicketsTab(){return $$('//td[contains(@class,"cdk-column-accountName mat-column-accountName")]/span/span')}
    get ticketInfoIcon() {return $$('//button[@title="Info"]')}
    get patchesTabInTicketInfo() {return $('//div[text()="Patches"]')}

    get statusFilterDropdownInTicketsTab(){return $('[id*=mat-select]')}
    get statusFilterOptions(){return $$('[id*=mat-option] span')}
    get statusColumnValuesInTicketsTab(){return $$('td[class*=cdk-column-status] span span')}
    get ticketsTable(){return $('table[class*=cdk-table]')}

    get licensesIconInAccountsTab(){return $('td[class*=cdk-column-licenses] span')}
    get statusFilterDropdownInLicensesTab(){return $('[id*=mat-select]')}
    get statusColumnValuesInLicensesTab(){return $$('td[class*=cdk-column-licenseKeyStatus] span span')}

    get createAccountIconInAccountsTab(){return $('button[title="Create Account"]')}
//**************Account Create Elements*******************************************************************************************
    get accountNameInputInAccountCreateTab(){return $('input[formcontrolname="accountName"]')}
    get addressInputInAccountCreateTab(){return $('[formcontrolname="addressLine"]')}
    get countryInputInAccountCreateTab(){return $('input[formcontrolname="country"]')}
    get stateInputInAccountCreateTab(){return $('[formcontrolname="state"]')}
    get cityInputInAccountCreateTab(){return $('[formcontrolname="city"]')}
    get postalCodeInputInAccountCreateTab(){return $('[formcontrolname="postalCode"]')}
    get numberOfUsersInputInAccountCreateTab(){return $('input[formcontrolname="noOfUsers"]')}
    get supportLevelDrpdownInAccountCreateTab(){return $('[formcontrolname="supportLevel"]')}
    get designationDrpdownInAccountCreateTab(){return $('[formcontrolname="designation"]')}
    get accountTypeDrpdownInAccountCreateTab(){return $('[formcontrolname="accountType"]')}
    get accountStatusDrpdownInAccountCreateTab(){return $('[formcontrolname="accountStatus"]')}
    get partnerAccountIdDrpdownInAccountCreateTab(){return $('[formcontrolname="partnerAccountId"]')}
    get newPartnerIdDrpdownInAccountCreateTab(){return $('[formcontrolname="newPartnerId"]')}
    get csrDrpdownInAccountCreateTab(){return $('[formcontrolname="csr"]')}
    get accountCodeDrpdownInAccountCreateTab(){return $('[formcontrolname="accountCode"]')}
    get industryDrpdownInAccountCreateTab(){return $('[formcontrolname="industry"]')}
    get salesPersonDrpdownInAccountCreateTab(){return $('[formcontrolname="salesPerson"]')}

    get attribute1InputInAccountCreateTab(){return $('[formcontrolname="attribute1"]')}
    get attribute2InputInAccountCreateTab(){return $('[formcontrolname="attribute2"]')}
    get attribute3InputInAccountCreateTab(){return $('[formcontrolname="attribute3"]')}

    get billingCommentsInputInAccountCreateTab(){return $('[formcontrolname="billingComments"]')}

    get createBtnInAccountCreateTab(){return $('//span[text()="CREATE"]')}



    get patchesIconInAccountsTab(){return $$('td[class*=cdk-column-patches] span span')}
    get creatPatchIconInAccountPatches(){return $('button[title="Create Patch"]')}
    get patchNameInputInAccountPatchCreationTab(){return $('input[formcontrolname="patchName"]')}
    get preReqPatchDrpdwnInAccPatchCreationTab(){return $('[formcontrolname="prereqPatchId"]')}
    get displayDrpdwnInAccPatchCreationTab(){return $('[formcontrolname="displayFlag"]')}
    get ticketNoInputInAccountPatchCreationTab(){return $('input[formcontrolname="ticketNumber"]')}
    get prodChkboxInAccPatchCreationTab(){return $('[formcontrolname="isInstalledOnProd"] div')}
    get testChkboxInAccPatchCreationTab(){return $('[formcontrolname="isInstalledOnTest"] div')}
    get devChkboxInAccPatchCreationTab(){return $('[formcontrolname="isInstalledOnDev"] div')}
    get includeInArtifactDrpdwnInAccPatchCreationTab(){return $('[formcontrolname="includeInArtifactory"]')}
    get includeInReplicationDrpdwnInAccPatchCreationTab(){return $('[formcontrolname="includeInReplication"]')}
    get deliveredOnInputInAccPatchCreationTab(){return $('input[placeholder="Delivered on"]')}


    get saveBtnInAccountPatchCreationTab(){return $('//span[text()="SAVE"]')}

    get filterByCustDrpdownInAccountsTab(){return $('mat-form-field.filByCustomer div.mat-select-value')}
    get filterByStatusDrpdownInAccountsTab(){return $('mat-form-field.filByStatus div.mat-select-value')}
    get filterByProductDrpdownInAccountsTab(){return $('mat-form-field.filByProduct div.mat-select-value')}
    get statusListInAccountsTab(){return $$('td.cdk-column-accountStatus span')}

    get infoIconInAccountsTab(){return $$('button.info mat-icon')}
    get accountTypeInAccountInfoTab(){return $('[formcontrolname="accountType"] span span')}
    get closeIconInAccountInfoTab(){return $('mat-sidenav-content > div mat-icon')}

    get productsIconInAccountsTab(){return $$('td.cdk-column-accountProducts span span')}
    get productInAccountProductsTab(){return $('td.cdk-column-productName span')}
    get closeIconInProductsTab(){return $('mat-tab-header mat-icon')}

    get chooseFileElement(){return $('input[type="file"]')}








//******************Dynamic Locators ************************************************************************* */
    get productNameOption() {
        return (text) => {
            return $(`//span[contains(text(),"${text}")]`)
        }
    }
    get solutionCodeOption() {
        return (text) => {
            return $(`//span[contains(text(),"${text}")]`)
        }
    }
    get patchStatusOption(){
        return (text) => {
            return $(`//span[contains(text(),"${text}")]`)
        }
    }
    get baseVersionOption(){
        return (text) => {
            return $(`//span[contains(text(),"${text}")]`)
        }
    }
    get releaseBuildNoOption(){
        return (text) => {
            return $(`//span[contains(text(),"${text}")]`)
        }
    }
    get patchTypeOption(){
        return (text) => {
            return $(`//span[contains(text(),"${text}")]`)
        }
    }
    get superSeededPatchOption(){
        return (text) => {
            return $(`//span[contains(text(),"${text}")]`)
        }
    }
    get preReqSeededPatchOption(){
        return (text) => {
            return $(`//span[contains(text(),"${text}")]`)
        }
    }
    get patchCategoryOption(){
        return (text) => {
            return $(`//span[contains(text(),"${text}")]`)
        }
    }
    get dependentPatchOption(){
        return (text) => {
            return $(`//span[contains(text(),"${text}")]`)
        }
    }

    get accountIdOption(){
        return (text) => {
            return $(`//span[contains(text(),"${text}")]`)
        }
    }
    get productIdOption(){
        return (text) => {
            return $(`//span[contains(text(),"${text}")]`)
        }
    }

    get userIdOption(){
        return (text) => {
            return $(`//span[contains(text(),"${text}")]`)
        }
    }

    get filterListItem(){
        return(text) =>{
            return $(`//span[contains(text(),"${text}")]/ancestor::button[contains(@class,"checkbox-item")]`)
        }
    }

}
module.exports = new CustPortalPageElements()