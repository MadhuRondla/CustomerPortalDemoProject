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

}
module.exports = new CustPortalPageElements()